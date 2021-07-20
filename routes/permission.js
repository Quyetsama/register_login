const express = require("express");
const jwt = require('jsonwebtoken');
const router = express.Router();

const permisstionController = require("../controllers/PermisstionController");



router.get("/student", permisstionController.checkLogin, permisstionController.checkPermisstionStudent, permisstionController.student);
router.get("/teacher", permisstionController.checkLogin, permisstionController.checkPermisstionTeacher, permisstionController.teacher);
router.get("/admin", permisstionController.checkLogin, permisstionController.checkPermisstionAdmin, permisstionController.admin);

module.exports = router;