const userModel = require('../models/userModel')

const userloginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email, password });
        if (!user) {
            res.status(404).send('User Not Found');
            return;
        }
        return res.status(404).json({
            success:true,
            user
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error
        })
    }

}
const userRegisterController = async (req, res) => {
    try {
        const user = new userModel(req.body);
        await user.save();
        return res.status(201).json({
            success:true,
            user
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error
        })
    }
}
module.exports = { userloginController, userRegisterController }