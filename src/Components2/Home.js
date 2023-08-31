import React from "react";

function Home(props) {
  console.warn("home", props);

  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-3.jpg" />
        </div>
        <div className="text-wrapper item">
          <h6>i-Phone</h6>
          <h6>Price: $10000</h6>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ price: 1000, name: "i Phone 14" });
            }}
          >
            Add to cart
          </button>
          <br></br>
          <button
            className="remove-item-btn"
            onClick={() => {
              props.removeToCartHandler();
            }}
          >
            Remove item
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
