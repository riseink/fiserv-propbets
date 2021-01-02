import React, { Component } from "react";
import FormUserDetails from "./userdetails";
import Question1 from "./question1";
import FormPersonalDetails from "./personaldetails";
import Confirm from "./confirmDetails";
import Success from "./successmessage";


class UserForm extends Component {
  state = {
    step: 1,
    gender:"",
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  // go back to the previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { gender, firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { gender, firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <Question1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <Confirm 
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        values={values} />;
      case 5:
        return <Success />;
      default:
        break;
    }
  }
}

export default UserForm;
