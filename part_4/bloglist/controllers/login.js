const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')
require('dotenv').config()

loginRouter.post('/', async (req, res) => {
    const user = await User.findOne({ username: req.body.username })
    console.log(user)
    const authenticate = user === null ? false : await bcrypt.compare(req.body.password, user.passwordHash)

    if (!authenticate) {
        res.status(401).send({ error: 'username or password is incorrect' })
    }
    else {
        const userForToken = {
            username: user.username,
            id: user._id
        }
        console.log(user.username);
        console.log(user._id);


        const token = jwt.sign(userForToken, process.env.SECRET)
        res.status(200).send({ token, username: req.body.username, name: req.body.name })
    }
})

module.exports = loginRouter