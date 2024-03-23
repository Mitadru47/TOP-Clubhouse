const asyncHandler = require("express-async-handler");

const User = require("../models/user");
const Message = require("../models/message");

// Index Home Page
exports.index = asyncHandler(async (req, res, next) => {

    const messages = await Message.find().populate("creator").exec();
    res.render("index", { messages: messages });
});

// User List
exports.user_list = asyncHandler(async (req, res, next) => {

    const users = await User.find().exec();
    const messages = await Message.find().exec();

    res.render("user_list", { users: users, messages: messages });
});

// User Detail
exports.user_detail = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: User Detail - " + req.params.id);
});

// User Delete GET
exports.user_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: User Delete GET");
});

// User Delete POST
exports.user_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: User Delete POST");
});

// User Update GET
exports.user_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: User Update GET");
});

// User Update POST
exports.user_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: User Delete POST");
});