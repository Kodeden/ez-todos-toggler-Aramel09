import TodoList from "./components/TodoList";
import useList from "./hooks/useList";

function App() {
  const [list, counter, setCounter] = useList();

  return (
    <>
      <div className=" bg-darkpurple">
        <header className="flex justify-center text-3xl font-bold text-silverpink underline">
          Todo List
        </header>
        <TodoList list={list} counter={counter} setCounter={setCounter} />
      </div>
    </>
  );
}

export default App;
