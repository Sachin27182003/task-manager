import { useState, useEffect } from 'react';
import type { Task } from '../types/task';

// Updated to point strictly to the root domain/port
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async (): Promise<void> => {
    try {
      setLoading(true);
      // Appended /tasks to the fetch call
      const response = await fetch(`${API_URL}/tasks`);
      if (!response.ok) throw new Error('Failed to fetch tasks');
      const data: Task[] = await response.json();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError('Could not load tasks.');
      console.error((err as Error)?.message);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title: string, description: string): Promise<boolean> => {
    if (!title.trim()) return false;
    try {
      const response = await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }), 
      });
      if (!response.ok) throw new Error('Failed to add task');
      const newTask: Task = await response.json();
      setTasks((prevTasks) => [...prevTasks, newTask]);
      return true; 
    } catch (err) {
      setError('Could not add task.');
      console.error((err as Error)?.message);
      return false; 
    }
  };

  const updateTask = async (id: string, updates: Partial<Task>): Promise<boolean> => {
    try {
      const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });

      if (!response.ok) throw new Error('Failed to update task');

      const updatedTask: Task = await response.json();
      setTasks((prevTasks) => 
        prevTasks.map((task) => (task.id === id ? updatedTask : task))
      );
      return true; 
    } catch (err) {
      setError('Could not update task.');
      console.error((err as Error)?.message);
      return false; 
    }
  };

  const deleteTask = async (id: string): Promise<boolean> => {
    try {
      const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete task');

      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      return true; 
    } catch (err) {
      setError('Could not delete task.');
      console.error((err as Error)?.message);
      return false; 
    }
  };

  return { tasks, loading, error, addTask, updateTask, deleteTask };
};