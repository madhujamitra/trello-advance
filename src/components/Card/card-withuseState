import { useState } from "react";
import List from "../List/List";
import { ThemeProvider } from "../context/ThemeContext";
import ThemedComponent from "../ThemedComponent";
import { v4 as uuidv4 } from "uuid";

interface ListId {
  key: number;
  listId: string;
}

export default function Card() {
  const [lists, setLists] = useState<ListId[]>([]);

  function newList() {
    const newkey = lists.length;
    const newListId = uuidv4();
    const newListData = { key: newkey, listId: newListId };
    setLists((prevLists: any) => [...prevLists, newListData]);
  }

  function listValue(value:any){
    console.log(value + "incard");
  }

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
        {lists.map((list) => (
          <List key={list.key} listId={list.listId} listValue={listValue}/>
        ))}
        <button onClick={newList}> New List</button>
      </div>
    </section>
  );
}
