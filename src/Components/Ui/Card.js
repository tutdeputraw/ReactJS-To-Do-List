const Card = (props) => {
  const classes = 'card ' + props.className + ' box-border max-w-sm mx-auto p-2 rounded-xl';
  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}
export default Card;