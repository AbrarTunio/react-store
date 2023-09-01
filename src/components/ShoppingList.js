import plantList from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";
import Category from "./Category";
import { useState } from "react";

const categoryList = [];

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState("");

  plantList.forEach((plant) => {
    if (!categoryList.includes(plant.category)) {
      categoryList.push(plant.category);
    }
  });

  function addToCart(name, price) {
    //check to see if plant already exists in cart
    const plantExist = cart.find((plant) => plant.name === name);

    if (plantExist) {
      const currentPlantFilteredCart = cart.filter(
        (plant) => plant.name !== name
      );
      //This contains all cart plants except the one we added now
      updateCart([
        ...currentPlantFilteredCart,
        { name, price, qty: plantExist.qty + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, qty: 1 }]);
    }
  }

  return (
    <div className="jh-shopping-list">
      {/* <ul>
        {categoryList.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul> */}
      <div>
        <Category
          categories={categoryList}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />

        <ul className="jh-plant-list">
          {plantList.map(({ id, cover, name, water, light, price, category }) =>
            !activeCategory || activeCategory === category ? (
              <div key={id}>
                <PlantItem
                  cover={cover}
                  name={name}
                  water={water}
                  light={light}
                />
                <button onClick={() => addToCart(name, price)}>Add</button>
              </div>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingList;
