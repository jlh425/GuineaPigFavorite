import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import GuineaPigsSlideShow from "../components/GuineaPigsSlideShow";
import GuineaPigsForm from "../components/GuineaPigsForm";

const GUINEAPATHS = [
  "https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
];

function GuineaPigsContainer() {
  const [currentGP, setCurrentGP] = useState(0);
	const [favoriteGP, setFavoriteGP] = useState(0);
	const src = GUINEAPATHS[currentGP];

  const favoriteChangeHandler = (event) => {
    setFavoriteGP(parseInt(event.target.value));
  }

  const resetFavoriteHandler = () => {
    setFavoriteGP(0);
  }

  useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentGP(prevGP => {
				const nextGP = prevGP + 1;
				return nextGP % GUINEAPATHS.length;
			});
		}, 5000)
		return () => clearInterval(intervalId);
	}, []);


	return (
    <>
      <GuineaPigsSlideShow src={src} isFavorite={currentGP === favoriteGP}/>
      <GuineaPigsForm favoriteGP={favoriteGP} onSelectFavorite={favoriteChangeHandler} onResetFavorite={resetFavoriteHandler}/>
    </>
  );
}

export default GuineaPigsContainer;

/*

function Container() {
  const [isActive, setIsActive] = useState(false);                                
 
  return (
    <>
      <Presentational active={isActive} toggle={setIsActive}/>
      <OtherPresentational active={isActive}/>
    </>
    );                            
  }
 
function Presentational(props) {
  return (
    <h1>Engines are {props.active}</h1>
    <button onClick={() => props.toggle(!props.active)}>Engine Toggle</button>
  );
}
 
function OtherPresentational(props) {
  // render...
}
import React from "react";
 
function MyComponent({ prop1, prop2 }) {
  // body
};
 
export default MyComponent;
*/