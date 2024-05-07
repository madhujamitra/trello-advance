import { useState, useReducer } from "react";
import List from "../List/List";
import { v4 as uuidv4 } from "uuid";

interface ListId {
  listId: string;
  heading: string;
  tasks: { id: string; value: string }[];
}

interface State {
  lists: ListId[];
}

type Action =
  | { type: "ADD_LIST"; listId: string }
  | { type: "UPDATE_LIST_HEADING"; listId: string; heading: string }
  | {
      type: "ADD_TASK_TO_LIST";
      listId: string;
      taskId: string;
      taskValue: string;
    };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_LIST":
      return {
        ...state,
        lists: [
          ...state.lists,
          { listId: action.listId, heading: "", tasks: [] },
        ],
      };

    case "UPDATE_LIST_HEADING":
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.listId === action.listId
            ? { ...list, heading: action.heading }
            : list
        ),
      };

    case "ADD_TASK_TO_LIST":
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.listId === action.listId
            ? {
                ...list,
                tasks: [
                  ...list.tasks,
                  { id: action.taskId, value: action.taskValue },
                ],
              }
            : list
        ),
      };

    default:
      return state;
  }
}

const initialState: State = {
  lists: [],
};

export default function Card() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function newList() {
    const newListId = uuidv4();
    dispatch({ type: "ADD_LIST", listId: newListId });
  }

  const updateHeading = (listId: string, heading: string) => {
    dispatch({ type: "UPDATE_LIST_HEADING", listId, heading });
  };

  const addTaskToList = (listId: string, taskId: string, taskValue: string) => {
    dispatch({ type: "ADD_TASK_TO_LIST", listId, taskId, taskValue });
  };

  return (
    <section>
      <div
        style={{
          border: "2px solid black",
          width: "100%",
          height: "1000px",
          display: "flex",
          gap: "10px",
        }}
      >
        {state.lists.map((list) => (
          <List
            key={list.listId}
            listId={list.listId}
            heading={list.heading}
            tasks={list.tasks}
            updateHeading={updateHeading}
            addTaskToList={addTaskToList}
          />
        ))}
        <button onClick={newList}> New List</button>
      </div>
    </section>
  );
}
