import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface TaskProps {
  onTaskAdd: (task: Task) => void;
}

interface Task {
  id: string;
  value: string;
}

const Task: React.FC<TaskProps> = ({ onTaskAdd }) => {
  const [taskValue, setTaskValue] = useState("");

  function taskSubmit(e: any) {
    e.preventDefault();
    const newTask = { id: uuidv4(), value: taskValue };
    onTaskAdd(newTask);
    setTaskValue("");
  }
  
  function changeValue(e: any) {
    setTaskValue(e.target.value);
  }

  return (
    <>
      <form onSubmit={taskSubmit}>
        <div style={{ border: "1px solid pink", height: "10%" }}>
          <input type="text" value={taskValue} onChange={changeValue}></input>
        </div>
        <button type="submit">Add new task</button>
      </form>
    </>
  );
};

export default Task;
