import { useState } from "react";
import axios from "axios";

function CreateTask({ onClose }) {
    const API_URL = import.meta.env.VITE_API_URL;

    const [form, setForm] = useState({
        title: "",
        description: "",
        status: "Pending",
        due_date: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`${API_URL}/tasks`, form);
            onClose(); 
            window.location.reload(); 
        } catch (error) {
            console.log(error);
            setError("Unexpected error occurred");
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">

                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Create Task
                    </h2>

                    {error && (
                        <p className="text-red-500 text-sm">{error}</p>
                    )}

                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        X
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        name="title"
                        placeholder="Task title"
                        value={form.title}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />

                    <textarea
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="datetime-local"
                        name="due_date"
                        value={form.due_date}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />

                    <select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Complete">Complete</option>
                    </select>

                    <div className="flex justify-end gap-2 pt-2">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                        >
                            Create
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateTask;