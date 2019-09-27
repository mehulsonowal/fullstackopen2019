const mongoose = require('mongoose')
const Blog = require('../models/blog')
const User = require('../models/user')
const blogsRouter = require('express').Router();
const jwt = require('jsonwebtoken')

blogsRouter.get('/api/blogs', async (request, response) => {
    const blogs = await Blog.find({}).populate('user', { username: 1 })
    response.json(blogs.map(blog => blog.toJSON()))
})

const getToken = (req) => {
    const authorization = req.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        const token = authorization.substring(7)
        return token
    }
    return null
}

blogsRouter.post('/api/blogs', async (request, response, next) => {
    const token = getToken(request)

    console.log('hi');

    try {
        const decodedToken = jwt.verify(token, process.env.SECRET)
        console.log(decodedToken);
        console.log(token);


        if (!(decodedToken.id && token)) {
            return response.status(401).send({ error: 'token missing or invalid' })
        }

        const user = await User.findById(decodedToken.id)

        const blog = new Blog({
            title: request.body.title,
            author: request.body.author,
            url: request.body.url,
            likes: request.body.likes,
            user: user._id
        })

        const savedBlog = await blog.save()
        user.blogs = user.blogs.concat(savedBlog._id)
        await user.save()
        response.status(201).json(savedBlog.toJSON())
    } catch (e) {
        next(e)
    }
})

module.exports = blogsRouter