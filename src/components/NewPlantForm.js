import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";


function NewPlantForm(props) {
    function handleNewPlantFormSubmission(event) {
        event.preventDefault();
        props.onNewPlantCreation({
            name: event.target.name.value,
            scientificName: event.target.scientificName.value,
            price: event.target.price.value,
            pests: event.target.pests.value,
            plantingSeasons: event.target.plantingSeasons.value,
            needs: event.target.needs.value,
            id: v4()
        });
    }

    return (
        <>
            <form onSubmit={handleNewPlantFormSubmission}>
                <input
                    type='text'
                    name='name'
                    placeholder='Name' />

                <input
                    type='text'
                    name='scientificName'
                    placeholder='Scientific Name' />

                <input
                    type='text'
                    name='price'
                    placeholder='Price' />

                <input
                    type='text'
                    name='pests'
                    placeholder='Pests' />

<input
                    type='text'
                    name='plantingSeasons'
                    placeholder='Planting Seasons' />

<input
                    type='text'
                    name='needs'
                    placeholder='Needs' />

                <button type='submit'>Submit</button>
            </form>
        </>
    );
}
NewPlantForm.propTypes = {
    onNewPlantCreation: PropTypes.func
};
export default NewPlantForm