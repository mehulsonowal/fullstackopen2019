const axios = require('axios')
const url = '/api/login'

const loginUser = async (credentials) => {
    const res = await axios.post(url, credentials)
    return res.data
}

export default { loginUser }