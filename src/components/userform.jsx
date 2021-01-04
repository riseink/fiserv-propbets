import React, { Component } from "react";
import FormUserDetails from "./userdetails";
import Question1 from "./question1";
import Question2 from "./question2";
import Question3 from "./question3";
import Question4 from "./question4";
import Question5 from "./question5";
import Question6 from "./question6";
import Question7 from "./question7";
import Question8 from "./question8";
import Question9 from "./question9";
import Question10 from "./question10";


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
        question2: this.state.question2,
        question3: this.state.question3,
        question4: this.state.question4,
        question5: this.state.question5,
        question6: this.state.question6,
        question7: this.state.question7,
        question8: this.state.question8,
        question9: this.state.question9,
        question10: this.state.question10,
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
          <Question2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Question3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Question4
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 6:
          return (
            <Question5
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 7:
        return (
          <Question6
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 8:
          return (
            <Question7
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 9:
          return (
            <Question8
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 10:
          return (
            <Question9
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 11:
          return (
            <Question10
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 12:
          return (
            <input type="submit" value="Send to Firebase" onClick={this.  handleSubmit}></input>
          );
      default:
        break;
    }
  }
}

export default UserForm;
