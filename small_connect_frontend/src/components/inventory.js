import './inventory.css';

function Inventory(props) {
  return (
      <span className="item">
        <span className="item-info">
            <span className="item-name">{props.name}</span>
            <span className="item-price">Price: {props.price} Rupees</span>
        </span>
        <button className="btn">Add to cart &nbsp;&nbsp;<i className="fa fa-arrow-right"></i></button>
      </span>
  );
}

export default Inventory;
