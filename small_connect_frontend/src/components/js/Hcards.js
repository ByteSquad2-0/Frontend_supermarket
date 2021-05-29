import Cards from "./../card";

const Hcards = (val) =>{
return(
    <Cards 
    url = {val.img}
    shopname = {val.sname}
    rating = {val.ratings}
    />
    );
}

export default Hcards;