const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");

const endpoint = "/posts";

router.get(endpoint, postController.getAll);
router.get(`${endpoint}/:id`, postController.getOne);
router.post(endpoint, postController.create);
router.patch(`${endpoint}/:id`, postController.update);
router.delete(`${endpoint}/:id`, postController.delete);

module.exports = router;


const tab1 = ["a", "b", "c"];
const tab2 = ["d", "e", "f"];

const test = [tab1, tab2];