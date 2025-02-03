const Salaries = require('../models/salaries');
const  Employees  = require('../models/employees')
const { v4: uuid } = require('uuid');

exports.createSalaries = async (req, res) => {
    try {
        const { id } = req.params;
        
        const { amount, month, year } = req.body;
        const employee = await Employees.findOne({ where: { id: id } });
        console.log(employee);

        if (!employee) {
            return res.status(404).json({ message: 'employee not found' });
        }
        const monthlySalaryStatus = await Salaries.findOne({ where: { employee_id: employee.id } });

        if (monthlySalaryStatus && monthlySalaryStatus.month === month && monthlySalaryStatus.year === year) {
            return res.status(403).json({
                message: `Employee has already been paid for the month of ${month} ${year}`
            });
        }

        const newSalaries = await Salaries.create({
            id: uuid(),
            employee_id: employee.id,
            amount,
            month,
            year
        });

        res.status(201).json({ message: 'Salary created successfully', newSalaries });
    } catch (error) {
        res.status(500).json({ message: 'internal server error', error: error.message });
    }
};

exports.getOneSalaries = async (req, res) => {
    try {
        const { id } = req.params;
        const getSalaries = await Salaries.findByPk( id );
        
        res.status(200).json({ message: `employee with id ${id} has been found`, getSalaries });
        
    } catch (error) {
        res.status(500).json({ message: 'internal server error', error: error.message });
    }
};
