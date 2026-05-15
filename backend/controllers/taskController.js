const pool = require('../db');

const createTask = async (req, res) => {
    console.log("Created");
};

const getTasks = async (req, res) => {
    console.log("Tasks");
};

const getTaskByID = async (req, res) => {
    console.log("Task x");
};

const updateTask = async (req, res) => {
    console.log("Task x updated");
};

const deleteTask = async (req, res) => {
    console.log("Task x deleted");
};

module.exports = {
    createTask, getTaskByID, getTasks, updateTask, deleteTask
};