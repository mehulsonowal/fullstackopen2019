const mongoose = require('mongoose')
const testHelper = require('./test_helper')
const Blog = require('../models/blog')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app) //creates a super agent object

beforeEach(async () => { //sets up test database with test data
    await Blog.deleteMany({})
    console.log('deleted all data for testing');


    const blogObjects = testHelper.initialBlogs.map(blog => new Blog(blog))
    const promiseArray = blogObjects.map(blog => blog.save())
    await Promise.all(promiseArray)
    console.log('test data has been uploaded');
})

test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('there are initially 2 blogs', async () => {
    const res = await api.get('/api/blogs')
    expect(res.body.length).toBe(testHelper.initialBlogs.length)
})

test('id is defined', async () => {
    const res = await api.get('/api/blogs')
    res.body.forEach(blog => {
        expect(blog.id).toBeDefined()
    });
})

test('posting a blog correctly', async () => {
    const newBlog = {
        title: 'luhem',
        author: 'me',
        url: 'luhem.com',
        likes: 3
    }

    await api.post('/api/blogs')
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const updatedBlogs = await testHelper.getBlogs();

    Object.keys(updatedBlogs[updatedBlogs.length - 1]).forEach(key => {
        if (key !== 'id') {
            expect(blog[key]).toBe(newBlog[key])
        }
    })

    expect(updatedBlogs.length).toBe(testHelper.initialBlogs.length + 1)
})

afterAll(() => {
    mongoose.connection.close()
})
