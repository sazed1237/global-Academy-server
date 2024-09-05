const enrollModel = require("../../models/enrollModel");

const updateStatus = async (req, res) => {
    try {
        const id = req?.params?.id;
        console.log(id)
        const { status } = req?.body
        console.log(status)

        const payload = {
            ...(status && { status: status })
        }

        const updatedEnrollment = await enrollModel.findByIdAndUpdate(id, payload)
        console.log(updatedEnrollment)

        res.json({
            message: "Enroll Update Successful",
            data: updatedEnrollment,
            success: true,
            error: false
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
        })
    }


}

module.exports = updateStatus