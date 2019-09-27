const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((sum, blog) => {
        return sum + blog.likes
    }, 0)
}

const favoriteBlog = (blogs) => {
    const fav = blogs.find(blog => blog.likes === (Math.max(...(blogs.map(blog => blog.likes)))))

    return {
        title: fav.title,
        author: fav.author,
        likes: fav.likes
    }
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}
