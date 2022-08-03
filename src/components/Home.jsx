import React from "react";
import img from "./RaiseLogo.png";
const Home = () => {
  return (
    <div>
    <div className="add-to-cart">
      <span>+</span>
    </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={img} alt="" />
        </div>
        <div className="text-wrapper item">
          <span>Rasie: </span>
          <span>$4000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
