const asyncHandler = require("express-async-handler");

// Index Home Page
exports.index = asyncHandler(async (req, res, next) => {
    res.render("index");
});

// User List
exports.user_list = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: User List");
});

// User Detail
exports.user_detail = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: User Detail - " + req.params.id);
});

// User Create GET
exports.user_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: User Create GET");
});

// User Create POST
exports.user_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: User Create POST");
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