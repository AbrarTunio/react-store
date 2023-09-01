import Sun from "../assests/sun.svg";
import Water from "../assests/water.svg";

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];

  function genCare() {
    switch (scaleValue) {
      case 1:
        alert("Plant requires little " + careType);
        break;
      case 2:
        alert("Plant requires Moderate " + careType);
        break;
      default:
        alert("Plant requires extra " + careType);
        break;
    }
  }

  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

  return (
    <div onClick={genCare}>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
