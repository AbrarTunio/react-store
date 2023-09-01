import CareScale from "./CareScale";
import "../styles/PlantItem.css";
import { useState } from "react";

export default function PlantItem({ id, cover, name, water, light }) {
  const [inputValue, setInputValue] = useState("Ask your question here");
  const isInputError = inputValue.includes("f");

  function itsHandle(e) {
    e.preventDefault();
    alert(inputValue);
  }

  return (
    <li key={id} className="jh-plant-item">
      {name}
      <img
        style={{ border: `2px solid lightgreen` }}
        className="jh-plant-item-cover"
        src={cover}
        alt={`${name} cover`}
      />

      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
      <div>
        <form onSubmit={itsHandle}>
          <input
            type="text"
            name="name"
            defaultValue={inputValue}
            onChange={(e) => {
              if (isInputError) {
                alert("You can not use this letter f");
              } else {
                setInputValue(e.target.value);
                console.log(inputValue);
              }
            }}
          />
          <button type="submit"> Submit </button>
        </form>
      </div>
    </li>
  );
}
