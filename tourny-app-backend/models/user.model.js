var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');


var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    email: String,
    rank: Number,
    rightHanded: Boolean,
    status: String,
    isAdmin: Boolean
});

UserSchema.plugin(mongoosePaginate);
const user = mongoose.model('User', UserSchema);

module.exports = user;