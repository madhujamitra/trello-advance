import { useState } from "react";
import Task from "../Task/task";

interface TaskObject {
  id: string;
  value: string;
}

interface ListProps {
  listId: string;
  heading: string;
  tasks: TaskObject[];
  updateHeading: (listId: string, heading: string) => void;
  addTaskToList: (listId: string, taskId: string, taskValue: string) => void;
}

const List = ({
  listId,
  heading,
  tasks,
  updateHeading,
  addTaskToList,
}: ListProps) => {
  const [inputValue, setInputValue] = useState("");
  const [showForm, setShowForm] = useState(true);

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    updateHeading(listId, inputValue); // Use action dispatcher for heading
    setShowForm(false);
  };

  const addTask = (task: TaskObject) => {
    addTaskToList(listId, task.id, task.value); // Use action dispatcher for tasks
  };

  return (
    <>
      <div
        style={{
          border: "2px solid red",
          width: "20%",
        }}
      >
        <div>
          <form
            onSubmit={onSubmitHandler}
            style={{ display: showForm ? "block" : "none" }}
          >
            <input
              style={{ display: "block" }}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Add List Name</button>
          </form>
          <h2>{heading}</h2>
        </div>
        {tasks.map((task) => (
          <li
            style={{ border: "2px solid black", padding: "5px" }}
            key={task.id}
          >
            {task.value}
          </li>
        ))}
        <Task onTaskAdd={addTask} />
      </div>
    </>
  );
};

export default List;
