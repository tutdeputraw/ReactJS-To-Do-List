const Card = (props) => {
  const classes = 'card ' + props.className + ' box-border max-w-sm mx-auto p-2 rounded-xl';
  const onClick = props.onClick;
  return (
    <div className={classes} onClick={onClick}>
      {props.children}
    </div>
  );
}
export default Card;