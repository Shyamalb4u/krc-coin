const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

router.get("/getUser/:id", userController.getUser);
router.get("/getMail/:mail", userController.getMail);
router.get("/getDirect/:uid", userController.getDirect);
router.get("/getDirectSummery/:uid", userController.getDirectSummery);
router.get("/getall", userController.getall);
router.post("/signup", userController.signup);

module.exports = router;
