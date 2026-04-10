import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import type { Task } from '../types/task';

interface TaskEditProps {
  tasks: Task[];
  updateTask: (id: string, updates: Partial<Task>) => Promise<boolean>;
}

export default function TaskEdit({ tasks, updateTask }: TaskEditProps) {
  const { id } = useParams<{ id: string }>();
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return (
      <div className="max-w-2xl mx-auto mt-8 p-6 text-center">
        <h2 className="text-xl font-bold">Task not found</h2>
        <Link to="/" className="text-blue-600 hover:underline underline-offset-2 mt-4 inline-block">← Back to tasks</Link>
      </div>
    );
  }

  return <TaskEditForm key={task.id} task={task} updateTask={updateTask} />;
}

// Isolated Form Component to safely handle state initialization
interface TaskEditFormProps {
  task: Task;
  updateTask: (id: string, updates: Partial<Task>) => Promise<boolean>;
}

function TaskEditForm({ task, updateTask }: TaskEditFormProps) {
  const navigate = useNavigate();
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || '');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    const success = await updateTask(task.id, { title, description });
    if (success) {
      navigate(`/task/${task.id}`); 
    }
    setIsSaving(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
      <Link to={`/task/${task.id}`} className="text-blue-600 hover:underline mb-6 inline-block">← Cancel Editing</Link>
      
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Task Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end pt-4 border-t border-gray-100">
          <button
            onClick={handleSave}
            disabled={isSaving || !title.trim()}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}