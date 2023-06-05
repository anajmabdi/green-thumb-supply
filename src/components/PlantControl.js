import React from 'react';
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';

class PlantControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        formVisibleOnPage: false,
        mainPlantList: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleAddingNewPlantToList = (newPlant) => {
    const newMainPlantList = this.state.mainPlantList.concat(newPlant);
    this.setState({mainPlantList: newMainPlantList,
                  formVisibleOnPage: false });
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPlantForm onNewPlantCreation= {this.handleAddingNewPlantToList} />;
      buttonText = "Return to Plant List"; 
    } else {
      currentlyVisibleState = <PlantList plantList ={this.state.mainPlantList}/>;
      buttonText = "Add Plant"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}
export default PlantControl;