const express = require("express");
const Controller = require("../controllers");
const router = express.Router();

//Post a new account
router.post("/sign-up", Controller.createNewUser);

//Handle login
router.post("/login", Controller.handleLogin);

//Get cart
router.post("/cart", Controller.getCurrentCart);

//Get info of current user
router.get("/info/:user_id", Controller.getUserInfo);

//Update info of current user
router.put("/info/update_info", Controller.updateUserInfo);

//Change password of user
router.put("/change_password", Controller.changePassword);

module.exports = router;
