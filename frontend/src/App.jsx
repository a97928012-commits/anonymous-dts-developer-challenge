import { useState } from "react"
import Tasks from "./components/Tasks"
import CreateTask from "./components/CreateTask"

function App() {
  const [showCreateForm, setShowCreateForm] = useState(false)

  return (
    <div className="bg-gray-300">
      <div className="max-w-4xl mx-auto p-6 bg-gray-200 min-h-screen">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-800">Tasks</h1>
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-red-500 text-white px-3 py-2 rounded-lg shadow hover:bg-red-700 transition"
          >
            Add Task
          </button>
        </div>
        <Tasks />
        {showCreateForm && (
          <CreateTask onClose={() => setShowCreateForm(false)} />
        )}

      </div>
    </div>
  )
}

export default App