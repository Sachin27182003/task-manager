import { useParams, useNavigate, Link } from 'react-router-dom';
import type { Task } from '../types/task';

interface TaskDetailProps {
  tasks: Task[];
  deleteTask: (id: string) => Promise<boolean>;
}

// Helper to format the date
const formatDateTime = (dateString?: string) => {
  if (!dateString) return 'N/A';
  const d = new Date(dateString);
  return d.toLocaleString(undefined, { 
    month: 'long', day: 'numeric', year: 'numeric', 
    hour: '2-digit', minute: '2-digit' 
  });
};

export default function TaskDetail({ tasks, deleteTask }: TaskDetailProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return (
      <div className="max-w-2xl mx-auto mt-8 p-6 text-center">
        <h2 className="text-xl font-bold">Task not found</h2>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">← Back to tasks</Link>
      </div>
    );
  }

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const success = await deleteTask(task.id);
      if (success) {
        navigate('/');
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">← Back to Tasks</Link>
      
      <div className="space-y-6">
        
        {/* Task Header Information */}
        <div className="border-b border-gray-100 pb-4">
          <div className="flex justify-between items-start mb-2">
            <h1 className={`text-3xl font-bold ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
              {task.title}
            </h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${task.completed ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
              {task.completed ? 'Completed' : 'Pending'}
            </span>
          </div>
          <p className="text-sm text-gray-400 font-mono">ID: {task.id}</p>
          <p className="text-sm text-gray-400">Created: {formatDateTime(task.createdAt)}</p>
        </div>

        {/* Task Description */}
          <h3 className="text-md font-semibold text-gray-700 mb-2">Description :</h3>
        <div className="bg-gray-50 p-4 rounded-md min-h-30 border border-gray-300">
          {task.description ? (
            <p className="text-gray-700 whitespace-pre-wrap">{task.description}</p>
          ) : (
            <p className="text-gray-400 italic">No description provided.</p>
          )}
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-between pt-4 border-t border-gray-100">
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-100 text-red-700 font-semibold rounded hover:bg-red-200 transition-colors"
          >
            Delete Task
          </button>
          
          <Link
            to={`/edit/${task.id}`}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
          >
            Edit Task
          </Link>
        </div>

      </div>
    </div>
  );
}