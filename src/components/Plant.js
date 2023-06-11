import React from "react";
import PropTypes from "prop-types";

function Plant(props){
    return (
      <>
      <div onClick = {() => props.whenPlantClicked(props.id)}>
      <h3>{props.name} </h3> 
      <p>${props.price} </p>
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
