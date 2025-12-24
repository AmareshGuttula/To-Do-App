import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ChooseActivity from './pages/ChooseActivity'
import CreateTask from './pages/CreateTask'
import './App.css'

function App() {
  // State for Tasks
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : [
      // Sample data matching design
      { id: 1, title: 'Fitness', subtitle: 'Exercise and gym', time: '6:00 - 7:30', completed: true, category: 'Sport', date: new Date().toISOString() },
      { id: 2, title: 'Check Emails and sms', subtitle: 'Review and respond to emails and SMS', time: '7:30 - 8:00', completed: true, category: 'Work', date: new Date().toISOString() },
      { id: 3, title: 'Work on Projects', subtitle: 'Focus on all the tasks related to Project', time: '8:00 - 10:00', completed: true, category: 'Work', date: new Date().toISOString() },
      { id: 4, title: 'Attend Meeting', subtitle: 'Team meeting with the client ABC', time: '10:00 - 11:00', completed: false, category: 'Work', date: new Date().toISOString() },
      { id: 5, title: 'Work of XYZ', subtitle: 'Change theme and ideas in XYZ', time: '11:00 - 13:00', completed: false, category: 'Work', date: new Date().toISOString() },
      { id: 6, title: 'Lunch Break', subtitle: 'Enjoy a healthy lunch and take some rest', time: '13:00 - 14:30', completed: false, category: 'Food', date: new Date().toISOString() },
    ]
  })

  // Start with dummy data for immediate visual verification if empty

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (task) => {
    setTodos([...todos, task])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  return (
    <Router>
      <div className="app-layout">
        <Routes>
          <Route path="/" element={<Home todos={todos} onToggle={toggleTodo} />} />
          <Route path="/categories" element={<ChooseActivity />} />
          <Route path="/create" element={<CreateTask onAddTask={addTodo} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
