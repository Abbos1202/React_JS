import UpdatedWith from "./withCounter";

const Hover = ({count, increment}) => {
  return (
    <div>
      <h1>Hover</h1>
      <button onMouseOver={increment}>Hover {count} times</button>
    </div>
  );
};

export default UpdatedWith(Hover);

