import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";


function NewPlantForm(props) {
    function handleNewPlantFormSubmission(event) {
        event.preventDefault();
        props.onNewPlantCreation({
            name: event.target.name.value,
            price: event.target.price.value,
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
                    name='price'
                    placeholder='Price' />
                <button type='submit'>Submit</button>
            </form>
        </>
    );
}

NewPlantForm.propTypes = {
    onNewPlantCreation: PropTypes.func
};
export default NewPlantForm