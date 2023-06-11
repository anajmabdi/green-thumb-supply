import React from "react";
import Plant from "./Plant";
import Proptypes from "prop-types";


function PlantList(props) {
    return (
        <React.Fragment>
          <hr/>
          {props.plantList.map((plant) =>
            <Plant
             whenPlantClicked = { props.onPlantSelection }
            name={plant.name} 
            scientificName={plant.scientificName} 
            plantingSeasons={plant.plantingSeasons} 
            pests={plant.pests} 
            needs={plant.needs} 
            price = {plant.price}
            id={plant.id} 
            key={plant.id}/>
          )}
        </React.Fragment>
      );
}

PlantList.propTypes = {
    plantList: Proptypes.array,
    onPlantSelection: Proptypes.func
};

export default PlantList;