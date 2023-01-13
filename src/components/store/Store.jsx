import React, { useState } from "react";
import Card from "./Card";
import imgData from "../../imgData";
import Cart from "./Cart";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

function Store() {
  const [cartItmes, setCartItems] = useState({
            id:"",
            title:"",
            moneySign:"",
            price:"",
            img:""
  });
  const [count, setCount] = useState(1);
  console.log(cartItmes);
  
  function addItem(cartItems,e) {
    setCartItems(prevState => {
      const some = imgData.find(data => {
        if(e.target.dataset.itemid === data.id){
          return({
            ...prevState,
            [prevState.id]: data.id,
            [prevState.id]:data.id,
            [prevState.title]:data.productTitle,
            [prevState.moneySign]:data.countryMoney,
            [prevState.price]:data.price,
            [prevState.img]:data.imgUrl
          })
          return some;
        }
      })
    })
    
    
}



  function contentElement(contents) {
    return (
      <Card
        key={contents.id}
        id={contents.id}
        title={contents.productTitle}
        moneySign={contents.countryMoney}
        price={contents.price}
        img={contents.imgUrl}
        onAdd={addItem}
      />
    );
  }

  function addCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function minusCount() {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : ""));
  }

  return (
    <div>
      <div className="card-container">{imgData.map(contentElement)}</div>

      <Cart/>
      {/* {cartItmes ? {cartItmes} : null} */}
    </div>
  );
}

export default Store;
