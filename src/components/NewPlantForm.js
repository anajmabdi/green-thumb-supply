import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";


function NewPlantForm(props) {
    function handleEditPlantFormSubmission(event) {
        event.preventDefault();
        props.onNewPlantCreation({
            name: event.target.name.value,
            scientificName: event.target.scientificName.value,
            price: parseInt(event.target.price.value),
            pests: event.target.pests.value,
            plantingSeasons: event.target.plantingSeasons.value,
            needs: event.target.needs.value,
            id: v4()
        });
    }
    return (
        <React.Fragment>
          <ReusableForm 
            formSubmissionHandler={handleEditPlantFormSubmission}
            buttonText="Submit" />
        </React.Fragment>
      );
    }

NewPlantForm.propTypes = {
    onNewPlantCreation: PropTypes.func
};

export default NewPlantForm