import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RaisedButton from "material-ui/RaisedButton";

class Question1 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h1 className="question">What is your Gender?</h1>
            <RadioGroup row name="gender" defaultValue={values.gender} onChange={handleChange}>
              <FormControlLabel value="male" control={<Radio />} label="Male" onChange={handleChange("gender")} />
              <FormControlLabel value="Female" control={<Radio />} label="Female" onChange={handleChange("gender")}/>
            </RadioGroup>
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Question1;
