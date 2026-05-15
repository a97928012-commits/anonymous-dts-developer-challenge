import axios from "axios";
import EditTask from "./EditTask";
import { useState, useEffect } from "react";

function Tasks() {
    const API_URL = import.meta.env.VITE_API_URL;
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await axios.get(`${API_URL}/tasks`);
                setTasks(res.data);
            } catch (error) {
                setTasks([]);
                console.log(error);
            }
        };

        fetchTasks();
    }, []);
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this task?")) return;

        try {
            await axios.delete(`${API_URL}/tasks/${id}`);
            setTasks(prev => prev.filter(task => task.id !== id));
        } catch (err) {
            console.error(err);
        }
    }
    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };

    return (
        <div className="flex flex-col gap-3 p-4">
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className="flex items-start justify-between gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
                >
                    <div className="flex-1">
                        <h2 className="text-lg font-semibold text-gray-800">{task.title}</h2>
                        <p className="text-sm text-gray-500">Status: {task.status}</p>
                        <p className="text-gray-600 text-sm">{task.description}</p>
                        <div className="flex items-center justify-between mt-3">
                            <p className="text-xs text-gray-400">Due {formatDate(task.due_date)}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button
                            onClick={() => setSelectedTask(task.id)}
                            className="text-xs cursor-pointer px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                        >
                            Edit
                        </button>

                        <button onClick={() => handleDelete(task.id)} className="text-xs px-2 cursor-pointer py-1 rounded-md bg-red-500 hover:bg-red-600 text-white transition">
                            Delete
                        </button>
                    </div>
                </div>
            ))}

            {selectedTask && (
                <EditTask
                    task={selectedTask}
                    onClose={() => setSelectedTask(null)}
                />
            )}
        </div>
    );
}

export default Tasks;