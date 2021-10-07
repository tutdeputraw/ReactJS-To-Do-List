import Card from "../Ui/Card";

const ToDoItem = (props) => {
  const cardOnClickHandler = event => {
    props.removeItem(props.item.id);
  };

  return (
    <Card
      onClick={cardOnClickHandler}
      className="bg-blue-300">{props.item.title}
    </Card>
  );
}

export default ToDoItem;