import PropTypes from "prop-types";
import Checkbox from "./Checkbox";

export default function TodoList({ list, counter, setCounter }) {
  return (
    <>
      <h3 className="flex justify-center py-5 text-2xl text-plum">
        {counter} / 200 Completed
      </h3>
      <ul className=" flex flex-col items-center text-silverpink ">
        {list.map((item) => (
          <li key={item.id}>
            {item.title}
            <Checkbox state={item.completed} setCounter={setCounter} />
          </li>
        ))}
      </ul>
    </>
  );
}

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired,
  setCounter: PropTypes.func.isRequired,
};
