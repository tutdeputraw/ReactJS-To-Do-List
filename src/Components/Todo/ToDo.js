import Card from '../Ui/Card';
import ToDoItem from './ToDoItem';

const ToDo = (props) => {
  return (
    <Card className="bg-white space-y-2">
      {props.items.map(item => <ToDoItem item={item} removeItem={props.removeItem} />)}
    </Card>
  );
}

export default ToDo;