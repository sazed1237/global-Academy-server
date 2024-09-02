const userModel = require("../../models/userModel")


const allUsersController = async (req, res) => {
    try {
        const users = await userModel.find()
        console.log("all users", users)

        res.json({
            message: "All Users",
            success: true,
            error: false,
            data: users
        })

    } catch (error) {
        res.status(5000).json({
            message: 'Error fetching users',
            success: false,
            error: true
        })
    }
}


module.exports = allUsersController