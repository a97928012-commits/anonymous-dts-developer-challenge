require('dotenv').config();

const express = require("express");
const pool = require('./db');

const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

const taskRouter = require('./routes/taskRouter')

app.use('/tasks', taskRouter);

app.listen(port,() =>{
    console.log(`Server listening oon port ${port}`);
})