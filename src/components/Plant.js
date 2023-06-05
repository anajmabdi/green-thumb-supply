import React from "react";
import PropTypes from "prop-types";

function Plant({name, price}) {
    return (
        <>
        <h3> {name} </h3> 
        <p> {price} </p>
        </>
    )

}


Plant.propTypes = {
    name: PropTypes.string,
    pests: PropTypes.string,
    price: PropTypes.number,
    plantingSeasons: PropTypes.string,
    needs: PropTypes.string
}
export default Plant;