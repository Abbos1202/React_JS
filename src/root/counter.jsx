import UpdatedWith from './withCounter';

const Counter = ({count, increment}) => {
  
  return (
    <div>
        <h1>Counter</h1>
        <button onClick={increment}>Clicked {count} times</button>
    </div>
  )
}

export default UpdatedWith(Counter);
