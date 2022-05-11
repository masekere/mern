const { registerController, loginController } = require("../controllers/user");
const router = require("express").Router();

router
    .post('/', registerController)
    .post('/login', loginController)

module.exports = router;