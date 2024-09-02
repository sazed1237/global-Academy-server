const userModel = require("../../models/userModel")

const isAdminController = async (req, res) => {
    try {
        const email = req?.params?.email
        // console.log('is admin email', email)

        if (email !== req.decoded.email) {
            return res?.status(403).json({
                message: "Please Login...",
                success: false,
                error: true
            })
        }


        const user = await userModel.findOne({ email })
        let admin = false

        if (user) {
            admin = user?.role === 'admin'
        }

        // console.log('isAdmin', admin)
        res.json({
            message: "You are a Admin",
            success: true,
            error: false,
            data: admin
        })

    } catch (error) {
        res.json({
            message: error.message || error,
            success: false,
            error: true
        })
    }
}

module.exports = isAdminController