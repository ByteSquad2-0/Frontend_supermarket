import React, {useEffect, useState} from 'react';
import './inventory.css';

function Inventory() {
  const [itemList, setItemList] = useState([{
    name : '',
    rupees: ''
  }])

  useEffect (() => {
    fetch("/").then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes => setItemList(jsonRes));
  })
  return (
      <span className="item">
        
          {itemList.map(items =>
            <span className="item-info">
              <span className="item-name">{items.name}</span>
            <span className="item-price">Price: {items.rupees} Rupees</span>
        </span>)}
            
        <button className="btn">Add To Cart &nbsp;&nbsp;<i className="fa fa-arrow-right"></i></button>
        <button className="btn">Buy Now &nbsp;&nbsp;<i className="fa fa-arrow-right"></i></button>
      </span>
  );
}

export default Inventory;
