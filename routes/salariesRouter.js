const express =require('express')
const { createSalaries, getOneSalaries } = require('../controllers/salariesController')
const router = express.Router()

router.post('/salaries/:id',createSalaries)
router.get('/salaries/:id',getOneSalaries)

module.exports = router