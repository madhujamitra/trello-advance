import { useState } from "react";
import Task from "../Task/task";

interface TaskObject {
  id: string;
  value: string;
}
interface HeadingObject {
  value: string;
}
interface ListIdObject{
  listId: string;
}

interface ListProps {
  heading: HeadingObject;
  tasks: TaskObject[];
}
const List = ({listId}:ListIdObject) => {

  console.log(listId);
  const [listData, setListData] = useState<ListProps>({
    heading: { value: "" },
    tasks: [],
  });


  const [inputValue, setInputValue] = useState("");
  const [showStore, setShowStore] = useState(true);

  function headingUpdate(e: any) {
    setInputValue(e.target.value);
  }

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    setListData((prevListData) => ({
      ...prevListData,
      heading: { value: inputValue },
    }));
    console.log(listData);
    setShowStore(false);
  };

  function checkfunc(value: TaskObject) {
    setListData((prevListData) => ({
      ...prevListData,
      tasks: [...prevListData.tasks, value],
    }));

    console.log(listData);
  }
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
            style={{ display: showStore ? "block" : "none" }}
          >
            <input
              style={{ display: "block" }}
              type="text"
              value={inputValue}
              onChange={headingUpdate}
            ></input>
            <button type="submit">Add List name</button>
          </form>
          <h2>{listData.heading.value}</h2>
        </div>
        {listData.tasks.map((task: any) => (
          <li
            style={{ border: "2px solid black", padding: "5px" }}
            key={task.id}
          >
            {task.value}
          </li>
        ))}
        <Task onTaskAdd={checkfunc} />
      </div>
    </>
  );
};

export default List;
