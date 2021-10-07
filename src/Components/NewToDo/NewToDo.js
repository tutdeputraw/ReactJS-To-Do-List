import Card from '../Ui/Card';
import NewToDoForm from './NewToDoForm';

const NewToDo = (props) => {
  return (
    <Card className="bg-white">
      <NewToDoForm addItem={props.addItem}/>
    </Card>
  );
}

export default NewToDo;