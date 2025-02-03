const  Employees  = require('../models/employees')
const { v4: uuid } = require('uuid')

exports.createEmployees = async (req, res) => {
    try {
        const { name, position, department } = req.body
        const newEmployees = await Employees.create({ id: uuid(), name, position, department })
        res.status(201).json({ message: 'new employee created successfully', newEmployees })
    } catch (error) {
        res.status(500).json({message:'interval server error',error: error.message})
    }
}

exports.getEmployees = async (req,res) => {
    try {
        const employees = await Employees.findAll()
        res.status(200).json({ message: 'all employees fetched successfully', employees })
    } catch (error) {
        res.status(500).json({message:'internal server error',error:error.message})
    }
}