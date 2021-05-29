import React from "react";
import Cards from "./card";

const Hcards = (val) =>{
return(
    <Cards 
    imgsrc = {val.img}
    title = {val.sname}
    review = {val.ratings}
    />
    );
}

export default Hcards;