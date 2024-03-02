const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    firstname: { type: String, required: true },
    lastname: { type: String, required: true},

    username: { type: String, required: true },
    password: { type: String, required: true },
    
    membership_status: { type: String }
});

UserSchema.virtual("url").get(function (){

    // We don't use an arrow function here as we'll need the "this" object.
    return "/index/user/" + this._id;
});

module.exports = mongoose.model("User", UserSchema);