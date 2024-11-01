import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import TaskResult from './components/TaskResult';
import Header from './components/Header';
import NameInput from './components/NameInput';

const App = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [name, setName] = useState(localStorage.getItem('userName') || '');

  const handleTaskSelection = (task) => {
    setSelectedTask(task);
    localStorage.setItem('selectedTask', task);
  };

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/gameReact" element={<NameInput setName={setName} />} />
        <Route path="/gameReact/home" element={<Home name={name} />} />
        <Route path="/gameReact/game" element={<Game name={name} onTaskSelect={handleTaskSelection} />} />
        <Route path="/gameReact/result" element={<TaskResult selectedTask={selectedTask} />} />
      </Routes>
    </div>
  );
};

export default App;