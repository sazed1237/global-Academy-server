const userModel = require("../../models/userModel");

const userSignInController = async (req, res) => {
    try {
        const { name, email, photoURL, role } = req.body;
        // console.log('user in body', req.body)

        const user = await userModel.findOne({ email })
        // console.log('user exist', user)

        if (user) {

            return res.json({
                message: "Login Successful",
                data: user,
                success: true,
                error: false
            })

        } else {

            const payload = {
                ...req.body
            }

            const newUser = new userModel(payload)
            const saveUser = await newUser.save()


            // console.log('sign up')

            return res.json({
                message: "Login Successful",
                data: saveUser,
                success: true,
                error: false
            })

        }


    } catch (error) {
        res.json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}


module.exports = userSignInController