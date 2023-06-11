import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import React from 'react';

function EditPlantForm(props){
    const { plant } = props;
  
    function handleEditPlantFormSubmission(event) {
      event.preventDefault();
      props.onEditPlant({
            name: event.target.name.value,
            scientificName: event.target.scientificName.value,
            price: event.target.price.value,
            pests: event.target.pests.value,
            plantingSeasons: event.target.plantingSeasons.value,
            needs: event.target.needs.value,
            id: plant.id
        });
    }
    return (
      <>
        <ReusableForm 
          formSubmissionHandler={handleEditPlantFormSubmission}
          buttonText="Update Plant" />
      </>
    );
  }

EditPlantForm.propTypes = {
  plant: PropTypes.object,
  onEditPlant: PropTypes.func
};

export default EditPlantForm