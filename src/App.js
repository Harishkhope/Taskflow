import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [newtask, setNewtask] = useState("");

  const handleChange = (event) => {
    setNewtask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskName: newtask,
      completed: false,
    };
    setTodolist([...todolist, task]);
  };

  const deleteTask = (id) => {
    const newTodolist = todolist.filter((task) => task.id !== id);
    setTodolist(newTodolist);
  };

  const completeTask = (id) => {
    setTodolist(
      todolist.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div className="App">
      <div className="addtask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list"></div>
      {todolist.map((task) => {
        return (
          <Task
            taskName={task.taskName}
            id={task.id}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        );
      })}
    </div>
  );
}

export default App;
