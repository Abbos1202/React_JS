import { useEffect, useId } from "react";

const List = () => {
    const id = useId()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
    }, [])

return <h1>{id} - Data Loading</h1>
}

export default List;