export default function Square(props) {
  return (
    <>
      <div className="square" onClick={props.onClick}>
        <span>{props.value}</span>
      </div>
    </>
  );
}
