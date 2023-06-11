import React from "react";
import PropTypes from "prop-types";

function Plant(props){
    return (
      <>
      <div onClick = {() => props.whenPlantClicked(props.id)}>
      <h2>{props.name} </h2> 
      <p>${props.price} </p>
      <br></br>
      <h3><strong>Click plant name for more details!</strong></h3>
      </div>
      </> 
    );
  }
  
  Plant.propTypes = {
    name: PropTypes.string,
    scientificName: PropTypes.string,
    pests: PropTypes.string,
    price: PropTypes.number,
    plantingSeasons: PropTypes.string,
    needs: PropTypes.string,
    id: PropTypes.string,
    whenPlantClicked: PropTypes.func
  };
  
export default Plant;
