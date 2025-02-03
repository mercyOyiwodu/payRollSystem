const express = require('express');
const cors = require('cors');
const sequelize = require('./database/sequelize');
const employeeRoutes = require('./routes/employeesRouter');
const salariesRoutes = require('./routes/salariesRouter'); 
const app = express();

app.use(cors()); 
app.use(express.json()); 
app.use(employeeRoutes);
app.use(salariesRoutes);

let port = 7070;

const server = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

server();

app.listen(port, () => {
    console.log(`my server is up and running on ${port}`);
});
