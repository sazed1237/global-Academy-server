const enrollModel = require("../../models/enrollModel");

const deleteEnrollmentController = async (req, res) => {
    try {
        const id = req.params.id;

        const enroll = await enrollModel.findByIdAndDelete(id)

        res.json({
            message: `Deleted successful`,
            success: true,
            error: false,
            data: enroll
        })

    } catch (error) {
        console.error("Error deleting enrollment:", error);
        res.status(500).json({
            message: "Internal Server Error",
            success: false,
            error: true
        });
    }
}

module.exports = deleteEnrollmentController