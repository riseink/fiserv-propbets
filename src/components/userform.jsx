import React, { Component } from "react";
import FormUserDetails from "./userdetails";
import Question1 from "./question1";
// import FormPersonalDetails from "./personaldetails";
// import Confirm from "./confirmDetails";
// import Success from "./successmessage";
import firebase from "../components/firebase"          

const db = firebase.firestore();

class UserForm extends Component {
  state = {
    step: 1,
    firstName:"",
    lastName:"",
    email:"",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
  };

  handleSubmit = event => {
    event.preventDefault()
      db.collection('players').add({
        player_first_name: this.state.firstName,
        player_last_name: this.state.lastName,
        player_email: this.state.email,
        question1: this.state.question1,
        score:"",
      });

    this.setState({
      step: 1,
      firstName:"",
      lastName:"",
      email:"",
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      question7: "",
      question8: "",
      question9: "",
      question10: "",
    });
  }

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
    const {  firstName, lastName, email, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10 } = this.state;
    const values = { firstName, lastName, email, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10 };
    
    switch (step) {
      case 1:
        return (
          
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Question1
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <input type="submit" value="Send to Firebase" onClick={this.handleSubmit}></input>
        );
      default:
        break;
    }
  }
}

export default UserForm;
