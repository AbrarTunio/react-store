import React from "react";

export default function ShoppingList() {
  const plantList = [
    "Monstera",
    "Ficus Lyrata",
    "Silver Pothos",
    "Yucca",
    "Palm",
  ];

  //   const newPlantList = [];

  //   plantList.forEach((plant, idx) => {
  //     newPlantList.push(<li key={`${plant}<->${idx}`}>{plant}</li>);
  //   });

  //   return newPlantList;
  return (
    <ul>
      {plantList.map((plant, idx) => (
        <li key={`${plant}<->${idx}`}> {plant} </li>
      ))}
    </ul>
  );
}
