import React from "react";

function Header(props) {
  console.warn("header", props.data);

  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/shopping_cart.png" />
      </div>
    </div>
  );
}

export default Header;
