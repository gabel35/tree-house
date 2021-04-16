const router = require("express").Router();
const user = require("./user");

// Book routes
router.use("/user", user);

module.exports = router;
