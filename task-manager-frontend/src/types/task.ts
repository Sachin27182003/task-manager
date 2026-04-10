// src/types/task.ts

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  description?: string; 
  createdAt?: string; 
}