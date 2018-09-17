var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');


var UserSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: {
        type: String,
        validate: {
            validator: function (email) {
                const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                return emailRegex.test(email);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    ranking: { type: Number },
    rightHanded: { type: Boolean },
    status: { type: String, default: 'active' },
    isAdmin: { type: Boolean, default: false }
});

UserSchema.plugin(mongoosePaginate);
const user = mongoose.model('User', UserSchema);

module.exports = user;