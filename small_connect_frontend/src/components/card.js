import './card.css';

function Rating(props) {
 
   let arr = [1,2,3,4,5];
    return (
        <span className="rating" >
            {arr.map((val) => (
                val<=props.rating ? 
                    <i className="fa fa-star star-fill" ></i> :
                    <i className="fa fa-star star-blank" ></i>
            ))}
        </span>
    );
}

function Card(props) {
  return (
      <span className="card">
          <img src={props.url} alt={props.shopname}/>
          <span className="data">
              <span>{props.shopname}</span>
              <Rating rating={props.rating} />
              <a href = {"/store/?user="+props.shopname.trim()} className = "link"><button className="btn">Buy Now &nbsp;&nbsp;<i className="fa fa-arrow-right"></i></button></a>
          </span>
      </span>
  );
}

export default Card;