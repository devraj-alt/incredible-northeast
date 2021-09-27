import { useState } from "react";
import "./styles.css";

const travelNE = {
  Assam: [
    { name: "Kaziranga National Park", rating: "4.5/5" },
    { name: "Kamakhya Temple", rating: "4.5/5" },
    { name: "Talatal Ghar", rating: "4.5/5" }
  ],

  Meghalaya: [
    { name: "Mawlynnong Village", rating: "4.5/5" },
    { name: "Mawjymbuin Caves", rating: "4.2/5" },
    { name: "Ever Living Museum", rating: "4.3/5" }
  ],

  ArunachalPradesh: [
    { name: "Tawang", rating: "4.6/5" },
    { name: "Ziro Festival of Music", rating: "5/5" },
    { name: "Golden Pagoda", rating: "4.6/5" }
  ],

  Manipur: [
    { name: "Kangla Fort", rating: "4/5" },
    { name: "Phumdis  Floating Islands", rating: "4.5/5" },
    { name: "Sangai Festival", rating: "5/5" }
  ],

  Tripura: [
    { name: "Neermahal Water Palace", rating: "4.4/5" },
    { name: "Unakoti", rating: "4.5/5" },
    { name: "Mahamuni Buddha Mandir", rating: "4.4/5" }
  ],

  Nagaland: [
    { name: "Naga Heritage Village", rating: "4.5/5" },
    { name: "Dzukou Valley Trek", rating: "4.8/5" },
    { name: "Hornbill Festival", rating: "5/5" }
  ],

  Mizoram: [
    { name: "Castle of Beino (Kolodyne)", rating: "4.8/5" },
    { name: "K.V.Paradise", rating: "4/5" },
    { name: "Solomon's Temple", rating: "4.4/5" }
  ]
};

const allPlace = Object.keys(travelNE);

export default function App() {
  const [destination, setDestination] = useState([]);

  function clickHandler(state) {
    var userInput = travelNE[state];
    setDestination(userInput);
  }

  return (
    <div className="App">
      <h1 className="heading">🌏 incredible North-East</h1>
      <p className="description">
        Checkout most beautiful travel destinations in NorthEast India
      </p>
      <div className="button-wrapper">
        {allPlace.map((state) => {
          return (
            <button
              className="btn"
              key={state}
              onClick={() => clickHandler(state)}
            >
              {state}
            </button>
          );
        })}
      </div>
      <div>
        {destination.map((item) => {
          return (
            <div className="box">
              <p className="name">{item.name}</p>
              <p className="rating">{item.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
