const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

const Message = require("../models/message");

// Message List
exports.message_list = asyncHandler(async (req, res, next) => {

    const messages = await Message.find({creator: req.params.id}).exec();
    res.render("message_list", { messages: messages });
});

// Message Detail
exports.message_detail = asyncHandler(async (req, res, next) => {

    const message = await Message.findById(req.params.id).populate("creator").exec();
    res.render("message_detail", { message: message });
});

// Message Create GET
exports.message_create_get = asyncHandler(async (req, res, next) => {
    res.render("message_create");
});

// Message Create POST
exports.message_create_post = [

    body("title", "Title cannot be empty!").trim().isLength({ min: 1 }).escape(),
    body("text", "Message cannot be empty!").trim().isLength({ min: 1 }).escape(),

    body("creator").escape(),
    body("timestamp", "Invalid date!").toDate(),
    
    asyncHandler(async (req, res, next) => {
    
        const error = validationResult(req);
        const message = new Message({

            title: req.body.title,
            text: req.body.text,

            creator: req.body.creator,
            timestamp: req.body.timestamp
        });

        if(!error.isEmpty){
            
            res.render("message_create", { message: message });
            return;            
        }

        else{

            await message.save();
            res.redirect(message.url);
        }
    })
];

// Message Delete GET
exports.message_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Message Delete GET");
});

// Message Delete POST
exports.message_delete_post = asyncHandler(async (req, res ,next) => {
    res.send("NOT IMPLEMENTED: Message Delete POST");
});

// Message Update GET
exports.message_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Message Update GET");
});

// Message Update POST
exports.message_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Message Update POST");
});