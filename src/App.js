import { useState } from "react";
import NewToDo from "./Components/NewToDo/NewToDo";
import ToDo from "./Components/Todo/ToDo";

const data = [];

const App = () => {
  const [items, setItems] = useState(data);

  const addItem = newItem => {
    setItems(prevItems => {
      return [newItem, ...prevItems];
    });
  };

  const removeItem = itemId => {
    setItems(prevItem => {
      const updatedItems = prevItem.filter(item => item.id !== itemId);
      return updatedItems;
    })
  };

  return (
    <div className="space-y-3 m-5">
      <NewToDo addItem={addItem} />
      <ToDo items={items} removeItem={removeItem} />
    </div>
  );
}

export default App;