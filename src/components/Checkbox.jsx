/* eslint-disable react/prop-types */
import PropType from "prop-types";

export default function Checkbox({ state, setCounter }) {
  if (!state) {
    return (
      <input
        type="checkbox"
        className=" ml-2 checked:bg-charmpink "
        onChange={(e) => {
          if (e.target.checked) {
            setCounter((prev) => prev + 1);
          } else {
            setCounter((prev) => prev - 1);
          }
        }}
      />
    );
  } else {
    return (
      <input
        type="checkbox"
        className=" ml-2 checked:bg-charmpink"
        defaultChecked
        onChange={(e) => {
          if (e.target.checked) {
            setCounter((prev) => prev + 1);
          } else {
            setCounter((prev) => prev - 1);
          }
        }}
      />
    );
  }
}

Checkbox.propType = {
  state: PropType.bool.isRequired,
  setCounter: PropType.func.isRequired,
};
