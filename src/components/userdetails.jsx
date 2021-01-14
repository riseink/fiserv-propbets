import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

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
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div className="question_wrapper">

            <div className="question_container">
              <h3 className="question">Player Information</h3>

              <TextField
                hintText="Enter your First Name"
                floatingLabelText="First Name"
                onChange={handleChange("firstName")}
                value={values.firstName}
                id="firstName"
                name="firstName"
              />
              <br />
              <TextField
                hintText="Enter your Last Name"
                floatingLabelText="Last Name"
                onChange={handleChange("lastName")}
                value={values.lastName}
                id="lastName"
                name="lastName"
              />
              <br />
              <TextField
                hintText="Enter your Email"
                floatingLabelText="Email"
                onChange={handleChange("email")}
                value={values.email}
                id="email"
                name="email"
              />
              <br />
              <RaisedButton
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
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
