import React from "react";
import PropTypes from "prop-types";


function ReusableForm(props) {
    return (
        <>
            <form onSubmit={props.formSubmissionHandler}>
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

                <button type='submit'>{props.buttonText}</button>
            </form>
        </>
    );
}


ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusableForm;