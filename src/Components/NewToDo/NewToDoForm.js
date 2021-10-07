import { useState } from "react";

const NewToDoForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');

  const titleOnChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    const data = {
      id: Math.random(),
      title: enteredTitle
    };
    props.addItem(data);
    setEnteredTitle('');
  };

  return (
    <form onSubmit={onSubmitHandler} className="space-y-2">
      <div className="flex space-x-2 items-center">
        <div>ToDo</div>
        <input
          type="text"
          onChange={titleOnChangeHandler}
          value={enteredTitle}
          className="border-black border-2 rounded-md flex-1 p-1"
        />
      </div>
      <div className="flex flex-row justify-end">
        <button className=" hover:bg-blue-400 px-3 rounded-md">Add</button>
      </div>
    </form>
  );
}

export default NewToDoForm;