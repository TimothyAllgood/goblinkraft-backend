// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../controllers");

// Current Path = '/api/v1/reports'

router.get("/", ctrl.report.getReports);
// exports
module.exports = router;
