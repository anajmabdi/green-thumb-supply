import React from "react";
import PropTypes from "prop-types";

function PlantDetail(props){
  const { plant } = props;

  return (
    <>
      <h1>Plant Detail</h1>
      <h3>{plant.name} </h3> 
      <p><em>{plant.scientificName}</em> </p>
      <p>${plant.price} </p>
      <p><strong>Planting Seasons</strong>: {plant.plantingSeasons} </p>
      <p><strong>Pests:</strong> {plant.pests} </p>
      <p><strong>Needs:</strong> {plant.needs} </p>
      <hr/>
    </>
  );
}

PlantDetail.propTypes = {
  plant: PropTypes.object,
};

export default PlantDetail;