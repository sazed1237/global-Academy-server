const jwt = require('jsonwebtoken')


const verifyToken = async (req, res, next) => {
    try {
        const authorization = req?.headers?.authorization

        if (!authorization) {
            return res.status(403).json({
                message: "Please login...",
                success: false,
                error: true
            });
        }

        const token = authorization.split(' ')[1];

        // console.log('verify token', token)

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    message: "Invalid or expired token. Please login again.",
                    success: false,
                    error: true
                });
            }
            req.decoded = decoded;
            next();
        });

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
        })
    }
}

module.exports = verifyToken