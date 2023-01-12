import React from "react";
function Card(props) {
  return (
    <div className="container-in-card">
      <div className="img-container">
        <img className="img-container-img" src={props.img} alt="" />
      </div>
      <div className="contents">
        <div className="product-title-container">
          <h2 className="product-title">{props.title}</h2>
        </div>
        <div className="contents-1">
          <h5 className="product-price">
            <span>{props.moneySign}</span>
            {props.price}
          </h5>
          <div className="btn-container ">
            <button
              
              onClick={props.onAdd}
              className="product-btn-1"
            >
              <p>Add To Cart</p>
            </button>
            <button type="button" className="product-btn-1">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Card;

