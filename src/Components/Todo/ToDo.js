import Card from '../Ui/Card';

const ToDo = (props) => {
  return (
    <Card className="bg-white space-y-2">
      {props.items.map(item => <Card className="bg-blue-300">{item.title}</Card>)}
    </Card>
  );
}

export default ToDo;