import React from "react";
import Plant from "./Plant";
import Proptypes from "prop-types";


function PlantList(props) {
    return (
        <React.Fragment>
          <hr/>
          {props.plantList.map((plant, index) =>
            <Plant name={plant.name} price = {plant.price} 
              key={index}/>
          )}
        </React.Fragment>
      );
}

PlantList.propTypes = {
    plantList: Proptypes.array
}

export default PlantList;