const usersRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

usersRouter.post('/api/users', async (req, res, next) => {
    try {
        if (!(req.body.username && req.body.password)) {
            res.status(400).send({ error: 'you must provide a username and password' })
        }
        else if (req.body.password.length < 3) {
            res.status(400).send({ error: 'password must be at least 3 characters long' })
        }
        else {
            const saltRounds = 10
            const passwordHash = await bcrypt.hash(req.body.password, saltRounds)

            const user = new User({
                username: req.body.username,
                name: req.body.name,
                passwordHash
            })

            const savedUser = await user.save()
            res.status(201).send(savedUser.toJSON())
        }
    }
    catch (e) {
        next(e)
    }
})

module.exports = usersRouter