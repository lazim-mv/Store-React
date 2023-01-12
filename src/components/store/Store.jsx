import React, { useState } from "react";
import Card from "./Card";
import imgData from "../../imgData";
import Cart from "./Cart";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

function Store() {
  const [addCart, setAddCart] = useState(true);
  const [count, setCount] = useState(1);
  // console.log(addCart);

  function addItem(selectedImgData) {
  //   const number = [1, 2, 34, 5];
    
  //     const selectedImgData = imgData.find(img => number.includes(img.id));
  //     return([
  //       <Cart
  //         {...selectedImgData}
  //         key={selectedImgData.id}
  //         title={selectedImgData.productTitle}
  //         moneySign={selectedImgData.countryMoney}
  //         price={selectedImgData.price}
  //         desc={selectedImgData.description}
  //         img={selectedImgData.imgUrl}
  //         count={count}
  //         addCount={addCount}
  //         minusCount={minusCount}
  //       />
  // ])
    
  }

  // function contentCartElement(data) {
  //   return (
  //     <Cart
  //       key={data.id}
  //       title={data.productTitle}
  //       moneySign={data.countryMoney}
  //       price={data.price}
  //       desc={data.description}
  //       img={data.imgUrl}
  //       count={count}
  //       addCount={addCount}
  //       minusCount={minusCount}
  //     />
  //   );
  // }

  function contentElement(contents) {

    return (
      <Card
        key={contents.id}
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

      {/* {addCart ? imgData.map(selectedImgData) : ""} */}
    </div>
  );
}

export default Store;
