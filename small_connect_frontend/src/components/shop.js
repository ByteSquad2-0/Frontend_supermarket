
import './inventory.css';

function Shop(props) {
  return (
      <span className="item">
        <span className="item-info">
            <span className="item-name">{props.name}</span>
            <span className="item-price">Address: {props.address}</span>
        </span>
        <a href = {"/inventory/?shop="+props.name.trim()} className = "link"><button className="btn">Find Shops &nbsp;&nbsp;<i className="fa fa-arrow-right"></i></button></a>
      </span>
  );
}

export default Shop;