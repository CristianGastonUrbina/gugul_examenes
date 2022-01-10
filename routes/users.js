var express = require("express");
var router = express.Router();
let userController = require("../controllers/usersCrontroller");
let recuerdame = require("../middlewares/recuerdame_check");

/* GET users listing. */

router.get("/login", recuerdame, userController.showlogin);
// router.get("/login", userController.showlogin);

router.post("/login", userController.login);

router.get("/register", userController.register);

router.post("/register", userController.create);

router.get("/:id/examen", userController.createExamen);
router.get("/:id", userController.listUsers);

module.exports = router;
