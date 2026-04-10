import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import AddTask from './components/AddTask';
import TaskEdit from './components/TaskEdit'; // 1. Import the new edit page
import { useTasks } from './hooks/useTasks';

function App() {
  const { tasks, loading, error, addTask, updateTask, deleteTask } = useTasks();

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans">
        <Navbar />
        
        {error && (
          <div className="max-w-2xl mx-auto mt-4">
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
              <p>{error}</p>
            </div>
          </div>
        )}

        <Routes>
          <Route path="/" element={<TaskList tasks={tasks} loading={loading} updateTask={updateTask} />} />
          <Route path="/add" element={<AddTask addTask={addTask} />} />
          
          <Route path="/task/:id" element={<TaskDetail tasks={tasks} deleteTask={deleteTask} />} />
          
          <Route path="/edit/:id" element={<TaskEdit tasks={tasks} updateTask={updateTask} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;