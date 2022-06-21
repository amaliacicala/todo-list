import React, { useState, useEffect } from 'react'
import { AddTodo } from "./components/AddTodo";
import { Footer } from "./components/Footer";
import { Layout } from "./components/Layout";
import { TodoList } from "./components/TodoList";

function App() {
  const [error, setError] = useState(null)
  const [task, setTask] = useState('')
  const [tasks, setTasks ] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      return JSON.parse(storedTasks);
    } else {
      return [];
    }
  });

  // save to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // on task submit
  const handleSubmit = (event) => {
    event.preventDefault()

    if (task.length < 3) {
      setError('Tell me more!')
      return false
    }

    setTasks([{ id: Date.now(), title: task, done: false}, ...tasks])

    setError(null)
    setTask('')
  }

  // on task done
  const handleCheck = (id) => {
    const index = tasks.findIndex(task => task.id === id)
    const duplicateTasks = [...tasks]

    duplicateTasks[index] = {
      id: tasks[index].id,
      title: tasks[index].title,
      done: !tasks[index].done,
    }

    setTasks(duplicateTasks)
  }

  // on task delete
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')){
      const updatedList = tasks.filter(task => task.id !== id)

      setTasks(updatedList)
    }
  }

  return (
    <>
      <Layout>
        <AddTodo
          task={task} 
          onChange={event => setTask(event.target.value)} 
          onSubmit={handleSubmit}
          error={error}
          />

        <TodoList 
          handleDelete={handleDelete} 
          handleCheck={handleCheck}
          tasks={tasks}
        />
      </Layout>

      <Footer />
    </>
  );
}

export default App;
