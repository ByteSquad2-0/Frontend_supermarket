import './inventory.css';

function Shop(props) {
  return (
      <span className="item">
        <span className="item-info">
            <span className="item-name">{props.name}</span>
            <span className="item-price">Address: {props.address}</span>
        </span>
        <button className="btn">Find Shops &nbsp;&nbsp;<i className="fa fa-arrow-right"></i></button>
      </span>
  );
}

export default Shop;