import monstera from "../assests/monstera.jpg";
import lyrata from "../assests/lyrata.jpg";
import pothos from "../assests/pothos.jpg";
// import yucca from "../assests/yucca.jpg";
import olive from "../assests/olive.jpg";
// import geranium from "../assests/geranium.jpg";
import basil from "../assests/basil.jpg";
// import aloe from "../assests/aloe.jpg";
import succulent from "../assests/succulent.jpg";

const plantList = [
  {
    name: "monstera",
    category: "classic",
    id: "1ed",
    isBestSale: true,
    light: 2,
    water: 1,
    price: 8,
    cover: monstera,
  },
  {
    name: "ficus lyrata",
    category: "classic",
    id: "2ab",
    isBestSale: true,
    light: 2,
    water: 3,
    price: 5,
    cover: lyrata,
  },
  {
    name: "silver pothos",
    category: "classic",
    id: "3sd",
    isBestSale: false,
    light: 1,
    water: 1,
    price: 5,
    cover: pothos,
  },
  // {
  //   name: "yucca",
  //   category: "classic",
  //   id: "4kk",
  //   isBestSale: true,
  //   light: 2,
  //   water: 2,
  //   plant: 5,
  //   cover: yucca,
  // },
  {
    name: "olive tree",
    category: "exterior",
    id: "5pl",
    isBestSale: false,
    light: 2,
    water: 3,
    price: 7,
    cover: olive,
  },
  // {
  //   name: "geranium",
  //   category: "exterior",
  //   id: "6uo",
  //   isBestSale: true,
  //   light: 1,
  //   water: 2,
  //   plant: 7,
  //   cover: geranium,
  // },
  {
    name: "basil",
    category: "exterior",
    id: "7ie",
    isBestSale: false,
    light: 2,
    water: 2,
    price: 9,
    cover: basil,
  },
  // {
  //   name: "aloe",
  //   category: "succulent",
  //   id: "8fp",
  //   isBestSale: false,
  //   light: 2,
  //   water: 1,
  //   plant: 8,
  //   cover: aloe,
  // },
  {
    name: "succulent",
    category: "succulent",
    id: "9vn",
    isBestSale: true,
    light: 1,
    water: 1,
    price: 7,
    cover: succulent,
  },
];

export default plantList;
