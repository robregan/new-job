const express = require("express");
const router = express.Router();


const hitsController = require("../controllers/createHit");

//Post Routes - simplified for now

router.post("/create-hit", hitsController.createHit);

// router.put("/likePost/:id", postsController.likePost);

// router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;