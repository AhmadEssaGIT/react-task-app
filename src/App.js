import Header from "./Components/Header.jsx";
import Tasks from "./Components/Tasks.jsx";
import AddTask from "./Components/AddTask.jsx";
import TasksTableHeader from "./Components/TasksTableHeader.jsx";
import Footer from "./Components/Footer.jsx";
import About from "./Components/About.jsx";

import "./index.css";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);
  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://127.0.0.1:5000/tasks");
    const data = await res.json();
    return data;
  };

  // Fetch a Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://127.0.0.1:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const [toggleForm, setToggleForm] = useState(false);
  // Toggle Add Form
  const onClick = () => {
    setToggleForm(!toggleForm);
  };
  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://127.0.0.1:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const getTask = await fetchTask(id);
    const editedTask = { ...getTask, reminder: !getTask.reminder };
    const res = await fetch(`http://127.0.0.1:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Methods": "*",
      },
      body: JSON.stringify(editedTask),
    });
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = async (newTask) => {
    const response = await fetch("http://127.0.0.1:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    const data = await response.json();
    setTasks([...tasks, data]);

    // Creating a Dump Id
    // const id = Math.floor(Math.random() * 1000 +1)
    // const addTaskNew = {id , ...newTask}
    // setTasks([...tasks , addTaskNew])
  };

  return (
    <Router>
      <div className="container">
        <Header title="" onClick={onClick} toggleForm={toggleForm} />
        <Routes>
          <Route
            path="/"
            exact
            Component={(props) => (
              <>
                {toggleForm ? (
                  <AddTask addTask={addTask} onClick={onClick} />
                ) : (
                  ""
                )}
                <TasksTableHeader />
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              </>
            )}
          />
          <Route path="/about" Component={About} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
