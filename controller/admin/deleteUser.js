const userModel = require("../../models/userModel");

const deleteUserController = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userModel.findByIdAndDelete(id)

        res.json({
            message: `User deleted successful`,
            success: true,
            error: false,
            data: user
        })

    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({
            message: "Internal Server Error",
            success: false,
            error: true
        });
    }
}

module.exports = deleteUserController