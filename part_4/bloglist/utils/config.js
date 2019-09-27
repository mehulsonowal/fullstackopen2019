require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI

if (process.env.NODE_ENV === 'test') { //runs with a different server if in testing mode
    MONGODB_URI = process.env.TEST_MONGODB_URI
}

const config = {
    MONGODB_URI,
    PORT
}

module.exports = config