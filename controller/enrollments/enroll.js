const enrollModel = require("../../models/enrollModel")

const enrollController = async (req, res) => {
    try {
        const { email, course } = req.body

        const query = { email: email, course: course }
        const existEnroll = await enrollModel.findOne(query)
        console.log("exist enroll", existEnroll)

        if (existEnroll) {
            return res.json({
                message: "You have already enroll this course!",
                success: false,
                error: true,
                data: existEnroll
            })
        }

        const enrollData = {
            ...req.body
        }

        const newEnroll = new enrollModel(enrollData)
        const saveEnroll = await newEnroll.save()

        res.json({
            message: "Your Have Enrolled Successfully",
            success: true,
            error: false,
            data: saveEnroll
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
        })
    }
}

module.exports = enrollController