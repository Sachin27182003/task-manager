import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

interface AddTaskProps {
  addTask: (title: string, description: string) => Promise<boolean>;
}

export default function AddTask({ addTask }: AddTaskProps) {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSaving(true);
    const success = await addTask(title, description);
    if (success) {
      navigate('/'); // Go back home on success
    } else {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
      <div className="flex items-center mb-6">
        <Link to="/" className="text-blue-600 hover:underline mr-4">← Back</Link>
        <h2 className="text-2xl font-bold text-gray-800">Create New Task</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Task Title <span className="text-red-500">*</span></label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Buy groceries"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description (Optional)</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            placeholder="Add any extra details here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-end">
          <button
            type="submit"
            disabled={isSaving || !title.trim()}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {isSaving ? 'Creating...' : 'Create Task'}
          </button>
        </div>
      </form>
    </div>
  );
}