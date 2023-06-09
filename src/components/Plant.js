import React from "react";
import PropTypes from "prop-types";

function Plant({name, price}) {
    return (
        <>
        <h3>{name} </h3> 
        <p>{scientificName} </p>
        <p>{price} </p>
        <p>{plantingSeasons} </p>
        <p>{pests} </p>
        <p>{needs} </p>
        </>
    )

}


Plant.propTypes = {
    name: PropTypes.string,
    scientificName: PropTypes.string,
    pests: PropTypes.string,
    price: PropTypes.number,
    plantingSeasons: PropTypes.string,
    needs: PropTypes.string
}
export default Plant;