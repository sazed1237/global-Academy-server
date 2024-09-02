const enrollModel = require("../../models/enrollModel")

const getEnrollmentsController = async (req, res) => {
    try {
        const enrollments = await enrollModel.find()


        res.json({
            massage: "all enroll courses",
            success: true,
            error: false,
            data: enrollments
        })


    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
            data: []
        })
    }
}

module.exports = getEnrollmentsController