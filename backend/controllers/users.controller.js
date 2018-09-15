var UserService = require('../services/user.service');

_this = this;


exports.getUsers = async function (req, res) {
    var page = req.query.page ? parseInt(req.query.page) : 1
    var limit = req.query.limit ? parseInt(req.query.limit) : 10;

    try {
        const users = await UserService.getUsers({}, page, limit);

        return res.status(200).json({ status: 200, data: users, message: "Success" });
    } catch (err) {

        return res.status(400).json({ status: 400, message: err.message });
    }
};

exports.getUserById = async function (req, res) {
    const userId = req.params.id;

    if (!userId) {
        return res.status(400).json({ success: false, message: "No userId found in the request" });
    }
    try {
        const user = await UserService.getUserById(userId);

        return res.status(200).json({ status: 200, data: user, message: "Success" });
    } catch (error) {

        return res.status(400).json({ success: false, message: `Cannot get user by ID - ${error.message}` });
    }
};


exports.createUser = async function (req, res) {
    try {
        var newUser = await UserService.createUser(req.body);

        return res.status(201).json({ success: true, data: newUser });
    } catch (error) {

        return res.status(400).json({ success: false, message: `User creation failed - ${error.message}` });
    }
};

// exports.createUser = async function (req, res, next) {
//     try {
//         const newUser = await UserService.createUser(req.body);

//         return res.status(201).json({ status: 201, data: newUser, message: "user created successfuly" });
//     } catch (error) {

//         return res.status(400).json({ status: 400, message: "User creation failed" });
//     }
// };

exports.updateUserById = async function (req, res) {
    const userId = req.params.id || req.body.id;

    if (!userId) {
        return res.status(400).json({ success: false, message: "no userId found" });
    }

    const { update, returnUpdated } = req.body;

    try {
        const updatedUser = await UserService.updateUser({ _id: userId }, update, returnUpdated);

        return res.status(200).json({ success: true, data: updatedUser, message: "Success" });
    } catch (ex) {

        return res.status(400).json({ success: false, message: `Unable to update user - ${ex.message}` });
    }
};

exports.removeUser = async function (req, res) {

    const userId = req.params.id;
    if (!userId) {
        return res.status(400).json({ success: false, message: `Unable to update user - no user ID supplied` });
    }
    try {
        // const deletedUser = await User.findByIdAndRemove(userId);
        const removedUser = await UserService.deleteUser(userId);

        return res.status(200).json({ status: 200, data: removedUser, message: "Success" });
    } catch (error) {

        return res.status(400).json({ success: false, message: `Unable to delete user ${error.message}` });
    }
};