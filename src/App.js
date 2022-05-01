import React from "react";
// Import Components
import Header from "./components/Header";
import Article from "./components/Article";
// Import data
import data from "./data";
// Import Images
import alaskaImg from "./images/alaska.webp";
import antarcticaImg from "./images/antarctica.jpeg";
import constantaImg from "./images/constanta.jpg";
import icelandImg from "./images/iceland.png";
import moldovaImg from "./images/moldova.webp";
import newYorkImg from "./images/new-york.png";

const ImagesArr = [
  newYorkImg,
  alaskaImg,
  antarcticaImg,
  icelandImg,
  constantaImg,
  moldovaImg,
];

export default function App() {
  const loadData = data.map((item, index) => {
    return <Article key={item.id} item={item} itemImage={ImagesArr[index]} />;
  });
  return (
    <div className="app--wrapper">
      <Header />
      <div>{loadData}</div>
    </div>
  );
}
