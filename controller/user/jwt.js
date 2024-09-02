
const jwt = require('jsonwebtoken')


const jwtController = async (req, res) => {

    const currentUser = req.body;

    const tokenData = {
        _id: currentUser._id,
        email: currentUser?.email
    }


    const token = jwt.sign(tokenData, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h'
    })

    console.log('jwt passing')

    res.send({ token })
}

module.exports = jwtController