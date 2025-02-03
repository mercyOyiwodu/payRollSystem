const express = require('express')
const { createEmployees, getEmployees } = require('../controllers/employeesController')

const router = express.Router()

router.post('/employees',createEmployees)
router.get('/employees',getEmployees)

module.exports = router