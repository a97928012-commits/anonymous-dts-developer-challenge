function Tasks(){
    return(
        
        <div className="max-w-4xl mx-auto p-6 bg-gray-200 min-h-screen">
            {/* header */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-800">Tasks</h1>
                <button className="bg-red-500 text-white px-3 py-2 rounded-lg shadow hover:bg-red-700 transition">
                    Add Task
                </button>
            </div>

            {/* container for tasks */}
            <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                    <input type="checkbox" className="mt-1 w-5 h-5 accent-blue-600" />
                    <div className="flex-1">
                        <h2 className="text-lg font-semibold text-gray-800">Task 1</h2>
                        <p className="text-gray-600 text-sm">
                            Description of the task we need to
                        </p>
                        <div className="flex items-center justify-between mt-3">
                        <p className="text-xs text-gray-400">Due 14/05/2026 3:00pm</p>
                        <div className="flex gap-2">
                            <button className="text-xs px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 transition">
                                Edit
                            </button>
                            <button className="text-xs px-2 py-1 rounded-md bg-red-500 hover:bg-red-600 text-white transition">
                                Delete
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks;