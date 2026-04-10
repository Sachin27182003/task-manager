import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Task } from '../types/task';

interface TaskListProps {
  tasks: Task[];
  loading: boolean;
  updateTask: (id: string, updates: Partial<Task>) => Promise<boolean>;
}

// Helper function to format the date and time nicely
const formatDateTime = (dateString?: string) => {
  if (!dateString) return null;
  const d = new Date(dateString);
  return {
    date: d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }),
    time: d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
  };
};

export default function TaskList({ tasks, loading, updateTask }: TaskListProps) {
  // 1. Add state to track the current filter
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

  // 2. Filter the tasks based on the selected state
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
      
      {/* Header with Top-Right Button */}
      <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-4">
        <h1 className="text-3xl font-bold text-gray-800">My Tasks</h1>
        <Link 
          to="/add" 
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors shadow-sm"
        >
          {/* Plus Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Task
        </Link>
      </div>

      {/* 3. Filter Buttons (Segmented Control style) */}
      {!loading && tasks.length > 0 && (
        <div className="flex space-x-2 mb-6">
          <button 
            onClick={() => setFilter('all')} 
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${filter === 'all' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('incomplete')} 
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${filter === 'incomplete' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            Pending
          </button>
          <button 
            onClick={() => setFilter('completed')} 
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${filter === 'completed' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            Completed
          </button>
        </div>
      )}

      {loading ? (
        <div className="text-center text-gray-500 py-8">Loading tasks...</div>
      ) : tasks.length === 0 ? (
        <div className="text-center text-gray-500 py-10 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
          <p className="mb-2">No tasks yet.</p>
          <p className="text-sm">Click "Add Task" to get started!</p>
        </div>
      ) : filteredTasks.length === 0 ? (
        // 4. Handle the edge case where the filter returns empty results
        <div className="text-center text-gray-500 py-10 rounded-lg bg-gray-50">
          <p>No {filter} tasks found.</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {/* 5. Map over filteredTasks instead of tasks */}
          {filteredTasks.map((task) => {
            const formattedDate = formatDateTime(task.createdAt);

            return (
              <li key={task.id} className="flex items-center p-4 bg-gray-50 border border-gray-200 rounded-md hover:shadow-md transition-shadow group">
                
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={(e) => updateTask(task.id, { completed: e.target.checked })}
                  title={task.completed ? "Mark as incomplete" : "Make as completed"}
                  className="w-5 h-5 text-blue-600 rounded border-gray-300 cursor-pointer mr-4 shrink-0"
                />
                
                <Link 
                  to={`/task/${task.id}`}
                  className="relative flex-1 block group/tooltip pr-4"
                >
                  <span className={`text-lg hover:text-blue-600 transition-colors ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                    {task.title}
                  </span>
                  <span>
                      {task.description && (
                        <p className="text-sm text-gray-500 mt-1">
                          {task.description.length > 50 ? task.description.substring(0, 47) + '...' : task.description}
                        </p>
                      )}
                  </span>
                  
                  {/* Tailwind Custom Tooltip */}
                  <div className="absolute left-1/10 -top-8 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-gray-800 text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap z-10 shadow-lg">
                    View this Task
                  </div>
                </Link>

                {/* Right-aligned Date and Time */}
                {formattedDate && (
                  <div className="text-right shrink-0 text-gray-400">
                    <p className="text-xs font-medium">{formattedDate.date}</p>
                    <p className="text-xs">{formattedDate.time}</p>
                  </div>
                )}

              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}