import React from "react";
import "./specialmenu.scss";
import spoon from "../../assets/spoon.png";
import { Recipes } from "../../containers/export";
const SpecialMenu = () => {
  let wine = [
    {
      id: 1,
      name: "Chapel Hill Shiraz",
      ingredients: "AU | Bottle",
      Price: "$56",
    },
    {
      id: 2,
      name: "Catena Malbee",
      ingredients: "AU | Bottle",
      Price: "$59",
    },
    {
      id: 3,
      name: "La Vieille Rose",
      ingredients: "FR | 750 ml",
      Price: "$44",
    },
    {
      id: 4,
      name: "Rhino Pale Ale",
      ingredients: "CA | 750 ml",
      Price: "$31",
    },
    {
      id: 5,
      name: "Irish Guninness",
      ingredients: "IE | 750 ml",
      Price: "$26",
    },
  ];

let Cocktails = [
  {
    id: 1,
    name: "Aperol Spritz",
    ingredients: "Aperol | Villa Marchesi prosecco | soda | 30ml",
    Price: "$20",
  },
  {
    id: 2,
    name: "Dark 'N 'Stormy",
    ingredients: "Dark rum | Ginger beer | Slice of lime. ",
    Price: "$16",
  },
  {
    id: 3,
    name: "Daiquiri",
    ingredients: "Rum | Citrus juice | Sugar",
    Price: "$10",
  },
  {
    id: 4,
    name: "Old Fashioned",
    ingredients: "Bourbon | Brown sugar | Angostura Bitters",
    Price: "$31",
  },
  {
    id: 5,
    name: "Negroni",
    ingredients: "Gin | Sweet Vermouth | Campari | Orange garnish",
    Price: "$26",
  },
];
  return (
    <div className="Restaurant--Menu__Container">
      <div className="Restaurant--Menu__Container--TopSection">
        <p className="TopSection__upperTagLine">Menu That Fits You Palatte</p>
        <img className="TopSection__spoon" src={spoon} alt="" />
        <h1 className="TopSection__Heading">Today's Special</h1>
      </div>
      <div className="Restaurant--Menu__Container--LastSection">
        <div className="lastSection__leftSection">
          <h1 className="leftSection__Heading">Wine & Beer</h1>
          {wine.map((item) => (
            <Recipes
              key={item.id}
              Name={item.name}
              desc={item.ingredients}
              Price={item.Price}
            />
          ))}
        </div>
        <div className="lastSection__middleSection"></div>
        <div className="lastSection__rightSection">
          <h1 className="rightSection__Heading">Cocktails</h1>
          {Cocktails.map((item) => (
            <Recipes
              key={item.id}
              Name={item.name}
              desc={item.ingredients}
              Price={item.Price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
