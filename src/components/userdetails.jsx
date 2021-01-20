import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import {reactLocalStorage} from 'reactjs-localstorage';

class FormUserDetails extends Component {

  continue = e => {

    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };



  render() {
 
    
    const { values, handleChange } = this.props;
    const accessKeyValue = reactLocalStorage.get('FISERV_ACCESS_KEY' , true);


    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div className="question_wrapper">

            <div className="question_container">
              <h3 className="question">Confirm Access Key</h3>

              <TextField
                hintText="Access Key"
                floatingLabelText="Access Key"
                onChange={handleChange("accessKey")}
                value={accessKeyValue}
                id="accessKey"
                name="accessKey"
              />
          
              <br />
              <RaisedButton
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue }
              />
            </div>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    marginTop: 15
  }
};

export default FormUserDetails;
