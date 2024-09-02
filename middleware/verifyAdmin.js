const userModel = require("../models/userModel");

const verifyAdmin = async (req, res, next) => {
    const email = req.decoded.email;
    const user = await userModel.findOne({ email })

    const isAdmin = user?.role === 'admin';

    if (!isAdmin) {
        res.status(403).json({
            message: "You are not an Admin",
            success: false,
            error: true,
        })
    }

    next()
}

module.exports = verifyAdmin