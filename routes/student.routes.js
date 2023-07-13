const express = require("express");
const router = express.Router();

router.get('/students', function(req, res) {
    res.send("This is the default student route")
})

module.exports = router;