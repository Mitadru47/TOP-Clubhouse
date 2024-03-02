const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const messageController = require("../controllers/messageController");

/// USER ROUTES ///

// GET - Index Home Page
router.get("/", userController.index);

// GET - User List
router.get("/users", userController.user_list);

// GET - User Detail
router.get("/user/:id", userController.user_detail);

// GET - User Create
router.get("/user/create", userController.user_create_get);

// POST - User Create
router.post("/user/create", userController.user_create_post);

// GET - User Delete
router.get("/user/:id/delete", userController.user_delete_get);

// POST - User Delete
router.post("/user/:id/delete", userController.user_delete_post);

// GET - User Update
router.get("/user/:id/update", userController.user_update_get);

// POST - User Update
router.post("/user/:id/update", userController.user_update_post);

/// MESSAGE ROUTES ///

// GET - Message List
router.get("/messages", messageController.message_list);

// GET - Message Detail
router.get("/message/:id", messageController.message_detail);

// GET - Message Create
router.get("/message/create", messageController.message_create_get);

// POST - Message Create
router.get("/message/create", messageController.message_create_post);

// GET - Message Delete
router.get("/message/:id/delete", messageController.message_delete_get);

// POST - Message Delete
router.post("/message/:id/delete", messageController.message_delete_post);

// GET - Message Update
router.get("/message/:id/update", messageController.message_update_get);

// POST - Message Update
router.post("/message/:id/update", messageController.message_update_post);

module.exports = router;