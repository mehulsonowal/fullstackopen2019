const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: 3,
        unique: true
    },
    name: String,
    passwordHash: String,
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    }]
})

mongoose.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject.__v
        delete returnedObject._id
        delete returnedObject.passwordHash
    }
})

mongoose.plugin(uniqueValidator)

const User = mongoose.model('User', userSchema)

module.exports = User