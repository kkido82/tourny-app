var router = require("express").Router();

var UserController = require("../../controllers/users.controller");

router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUserById);
router.post("/", UserController.createUser);
router.put("/:id?", UserController.updateUserById);
router.delete("/:id?", UserController.removeUser);

module.exports = router;