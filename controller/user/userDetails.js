const userModel = require("../../models/userModel")

const userDetailsController = async (req, res) => {
    try {
        const email = req?.query?.email
        console.log("current user email", email)

        const user = await userModel.findOne({email})

        console.log('current user details', user)

        if (!user) {
            return res.status(404).json({
                message: "User Not Found",
                error: true,
                success: false
            })
        }


        res.status(200).json({
            message: "User Details",
            error: false,
            success: true,
            data: user
        })


    } catch (error) {
        res.json({
            message: error.message || error,
            success: false,
            error: true
        })
    }
}

module.exports = userDetailsController