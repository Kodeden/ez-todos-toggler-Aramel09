import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/todos";

export default function useFetch() {
  const [list, setList] = useState([]);
  const [counter, setCounter] = useState(0);

  function finishedTodos(data) {
    let count = 0;
    data.map((toDo) => {
      if (toDo.completed) {
        count++;
        return count;
      }
      return count;
    });
    return count;
  }

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setList(data);

        setCounter(finishedTodos(data));
      });
  }, []);

  return [list, counter, setCounter];
}
