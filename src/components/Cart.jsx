import React, {useState} from "react";

export default function Cart({itemsName, itemsImg }) {
    //  Counter is a state initialized to 0
    const [counter, setCounter] = useState(0);
 
    // Function is called everytime increment button is clicked
    const increaseItem = () => {
        // Counter state is incremented
        setCounter(counter + 1);
    };
 
    // Function is called everytime decrement button is clicked
    const decreaseItem = () => {
        // Counter state is decremented
        setCounter(counter > 0 ? counter -1 : 0);
    };
  return (
    <div className="cart-page">
      <div className="container">
        <img src={itemsImg} alt="" />

        <div className="details">
          <h3>{itemsName}</h3>
          <div className="buttons">
            <button onClick={decreaseItem}>-</button>
            <h4>{counter}</h4>
            <button onClick={increaseItem }>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
