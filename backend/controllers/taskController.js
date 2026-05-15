const pool = require('../db');

const createTask = async (req, res) => {
    try {
        const { title, description, status, due_date} = req.body
        if(!title||!status||!due_date){
            return res.status(400).json({ error: 'All fields are required' });
        }
        const result = await pool.query(
            'INSERT INTO tasks (title, description, status, due_date) VALUES ($1,$2,$3,$4) RETURNING *'
            ,[title, description, status, due_date]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTasks = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM tasks'
        );
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTaskByID = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await pool.query(
            'SELECT * FROM tasks WHERE id=$1',
            [id]
        );
        if(result.rows.length === 0) {
            return res.status(404).json({error:'Task not found'});
        }
        res.json(result.rows[0])
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, description, status, due_date} = req.body;
        if(!title||!status||!due_date){
            return res.status(400).json({ error: 'All fields are required' });
        }

        const result = await pool.query(
            'UPDATE tasks SET title=$1, description=$2, status=$3, due_date=$4 WHERE id=$5 RETURNING *',
            [title, description, status, due_date, id]
        ); 

        if(result.rows.length === 0) {
            return res.status(404).json({error:'Task not found'});
        }
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTask = async (req, res) => {
        try {
        const {id} = req.params;
        const result = await pool.query(
            'DELETE FROM tasks WHERE id=$1 RETURNING *',
            [id]
        );
        if(result.rows.length === 0) {
            return res.status(404).json({error:'Task not found'});
        }
         res.json({ message: 'Task deleted', task: result.rows[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createTask, getTaskByID, getTasks, updateTask, deleteTask
};