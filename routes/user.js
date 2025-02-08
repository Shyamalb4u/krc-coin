const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

router.get("/getUser/:id", userController.getUser);
router.get("/getMail/:mail", userController.getMail);
router.get("/getPhrases/:phrases", userController.getPhrases);
router.get("/getDirect/:uid", userController.getDirect);
router.get(
  "/pending_activation/:publicKey",
  userController.getPendingActivation
);
router.get("/getDirectSummery/:uid", userController.getDirectSummery);
router.get("/getAccountSummery/:phrases", userController.getAccountSummery);
router.get("/getall", userController.getall);
router.post("/signup", userController.signup);
router.post("/booking", userController.booking);

module.exports = router;
