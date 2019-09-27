const Blog = require('../models/blog')

const initialBlogs = [
    {
        title: 'Resumes',
        author: 'Mehul Sonowal',
        url: 'gitbug.com',
        likes: 3
    },
    {
        title: 'Interships',
        author: 'Luhem Sonowal',
        url: 'github.com',
        likes: 5
    }
]

const nonExistingId = async () => {
    const blog = await new Blog(initialBlogs[0])
    await blog.save()
    await blog.remove()

    return blog._id.toString()
}

const getBlogs = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

module.exports = {
    initialBlogs, nonExistingId, getBlogs
}