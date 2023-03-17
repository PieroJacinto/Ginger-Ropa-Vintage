const { Router } = require("express");
const router = Router();
module.exports = router;

const mainController = require("../controllers/mainController");



router.get("/", mainController.home);
