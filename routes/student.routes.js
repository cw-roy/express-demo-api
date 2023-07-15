const express = require("express");
const router = express.Router();

const studentController = require("../controllers/student.controller")

router.get('/students', studentController.findAll)
router.get("/students/:id", studentController.findById)

module.exports = router;