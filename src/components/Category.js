import plantList from "../datas/plantList";
import "../styles/Category.css";

function Category({ categories, activeCategory, setActiveCategory }) {
  const categoryList = [];

  // make a list of unique categories
  plantList.forEach((plant) => {
    if (!categoryList.includes(plant.category)) {
      categoryList.push(plant.category);
    }
  });

  return (
    /* Show categoris in select options and setActiveCategory onClick event */
    <div className="jh-categories">
      <select
        className="jh-categories-select"
        onChange={(e) => setActiveCategory(e.target.value)}
      >
        <option> Select Any Category From Below </option>
        {categoryList.map((cat, idx) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* reset to active categories */}

      <button
        className="jh-categories-select"
        onClick={() => {
          setActiveCategory("");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Category;
