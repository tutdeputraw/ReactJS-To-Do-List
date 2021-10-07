import { useState } from "react";
import NewToDo from "./Components/NewToDo/NewToDo";
import ToDo from "./Components/Todo/ToDo";

const data = [
  {
    id: 0,
    title: 'todo 0'
  },
  {
    id: 1,
    title: 'todo 1'
  },
  {
    id: 2,
    title: 'todo 2'
  },
];

const App = () => {
  const [items, setItems] = useState(data);

  const addItem = (newItem) => {
    setItems((prevItems) => {
      return [newItem, ...prevItems];
    });
  };

  return (
    <div className="space-y-3 m-5">
      <NewToDo addItem={addItem} />
      <ToDo items={items} />
    </div>
  );
}

export default App;