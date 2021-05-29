import { useState } from 'react';
import './cart-item.css';

function CartItem(props) {
    const [qnt, setQuantity] = useState(1);

    let handleClick = (num) => {
        setQuantity(qnt + num < 1 ? 1 : qnt + num );
    };

    return (
      <span className="cart-item">
        <span className="cart-item-info">
            <span className="item-name">{props.name}</span>
            <span className="item-price">Price: {props.price} Rupees</span>
        </span>
        <span className="quantity" >
            <button className="add" onClick={() => handleClick(1)} ><i className="fa fa-plus"></i></button>
            <span className="item-quantity">{qnt}</span>
            <button className="minus" onClick={() => handleClick(-1)}><i className="fa fa-minus"></i></button>
        </span>
        <button className="deleteBtn"><i className="fa fa-trash fa-2x"></i></button>
      </span>
  );
}

export default CartItem;