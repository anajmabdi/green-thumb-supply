import React from "react";
import PropTypes from "prop-types";
import {useState} from 'react';

function PlantDetail(props){
  const { plant } = props;
  const [pounds, setPounds] = useState(400);

  function decrementPounds(){
    setPounds(pounds - 1);
    if (pounds <= 1) {
      setPounds("Out of Stock");
    }
  }

  return (
    <>
      <h1>Plant Details</h1>
      <h3>{plant.name} </h3> 
      <p><em>{plant.scientificName}</em> </p>
      <p>${plant.price} </p>
      <p><strong>Planting Seasons</strong>: {plant.plantingSeasons} </p>
      <p><strong>Pests:</strong> {plant.pests} </p>
      <p><strong>Needs:</strong> {plant.needs} </p>
      <p><strong>Pounds:</strong> {pounds}</p>
      <button onClick={ props.onClickingEdit }>Update Plant</button>
      <button onClick={ decrementPounds }>Buy pound</button>
      
      <hr/>
    </>
  );
}

PlantDetail.propTypes = {
  plant: PropTypes.object,
  pounds: PropTypes.number,
  onClickingEdit: PropTypes.func,
  decrementPounds: PropTypes.func,
};

export default PlantDetail;