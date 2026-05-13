import EditTask from "./EditTask"

import { useState } from "react"

function Tasks() {
    const [showEditForm, setShowEditForm] = useState(false)

    return (
        <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">Task 1</h2>
                <p className="text-sm text-gray-500">Status: Pending</p>
                <p className="text-gray-600 text-sm">
                    Description of the task we need to
                </p>
                <div className="flex items-center justify-between mt-3">
                    <p className="text-xs text-gray-400">
                        Due 14/05/2026 3:00pm
                    </p>
                    <div className="flex gap-2">
                        <button onClick={() => setShowEditForm(true)} className="text-xs px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 transition"  >
                            Edit
                        </button>
                        <button className="text-xs px-2 py-1 rounded-md bg-red-500 hover:bg-red-600 text-white transition">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            {showEditForm && (
                <EditTask onClose={() => setShowEditForm(false)} />
            )}
        </div>
    )
}

export default Tasks