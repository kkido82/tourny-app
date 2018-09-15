var User = require('../models/user.model');

_this = this;


exports.getUsers = async function (query, { options }) {
    try {
        const users = await User.paginate(query, options);

        return users;
    } catch (e) {

        throw Error(e);
    }
};

exports.getUserById = async function(userId) {
    try {
        const user = await User.findById(userId);

        return user;
    } catch (error) {

        throw Error(error);
    }
};

exports.createUser = async function (user) {
    const newUser = new User({
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        password: user.password,
        email: user.email,
        rank: user.rank,
        rightHanded: user.rightHanded,
        status: user.status
    });

    try {
        var createdUser = await User.create(newUser);

        return createdUser;    
    } catch (error) {

        throw Error(error);
    }
    
};


// exports.createUser = async function (user) {
//     const newUser = new User({
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user.email,
//         rank: user.rank,
//         rightHanded: user.rightHanded,
//         status: user.status
//     });

//     try {
//         const createdUser = await newUser.save();

//         return createdUser;
//     } catch (error) {

//         throw Error(error);
//     }
// };

exports.updateUser = async function(conditions, update, returnUpdated) {
    const updateOptions = {
        new: returnUpdated || false// returns the modified object
    };

    try {
        const updatedUser = await User.findOneAndUpdate(conditions, update, updateOptions);

        return  updatedUser;
    } catch (error) {

        throw Error(error);
    }
};

exports.deleteUser = async function(userId){

    try {
        // const userToRemove = await exports.getUserById(userId);

        const update = { status: "deleted" };

        const removedUser = await exports.updateUser({ _id: userId }, update, true);
        // const deletedUser = await User.findOneAndDelete(userId);
        // const deletedUser = await User.findOneAndRemove(userId);
        // const deletedUser = await User.findByIdAndRemove(userId);
        // const deletedUser = await User.remove({ _id: userId });

        return removedUser;
    } catch (error) {
        
        throw Error(error);
    }
};