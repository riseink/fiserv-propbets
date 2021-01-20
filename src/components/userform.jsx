import React, { Component } from "react";
import FormUserDetails from "./userdetails";
import Confirm from "./confirmDetails"
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
import Question11 from "./question11";
import Question12 from "./question12";
import Question13 from "./question13";
import Question14 from "./question14";
import Question15 from "./question15";
import Question16 from "./question16";
import Question17 from "./question17";
import Question18 from "./question18";
import Question19 from "./question19";
import Question20 from "./question20";
import Question21 from "./question21";
import Question22 from "./question22";
import Question23 from "./question23";
import Question24 from "./question24";
import Question25 from "./question25";
import {reactLocalStorage} from 'reactjs-localstorage';


import firebase from "../components/firebase"

const db = firebase.firestore();

const accessKeyValue = reactLocalStorage.get('FISERV_ACCESS_KEY' , true);

class UserForm extends Component {
  state = {
    step: 1,
    accessKey:accessKeyValue,
    firstName: "",
    lastName: "",
    email: "",
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
    question11: "",
    question12: "",
    question13: "",
    question14: "",
    question15: "",
    question16: "",
    question17: "",
    question18: "",
    question19: "",
    question20: "",
    question21: "",
    question22: "",
    question23: "",
    question24: "",
    question25: "",
  };

  handleSubmit = e => {
    e.preventDefault()
    db.collection('players').add({
      accessKey:this.state.accessKey,
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
      question11: this.state.question11,
      question12: this.state.question12,
      question13: this.state.question13,
      question14: this.state.question14,
      question15: this.state.question15,
      question16: this.state.question16,
      question17: this.state.question17,
      question18: this.state.question18,
      question19: this.state.question19,
      question20: this.state.question20,
      question21: this.state.question21,
      question22: this.state.question22,
      question23: this.state.question23,
      question24: this.state.question24,
      question25: this.state.question25,
      score: 0,
      rank: 0,
      player_team_name: "",
      player_hall_of_fame: "",
      player_location: "",
      player_tally: "0 of 25",
    });

    this.setState({
      step: 1,
      firstName: "",
      lastName: "",
      email: "",
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
      question11: "",
      question12: "",
      question13: "",
      question14: "",
      question15: "",
      question16: "",
      question17: "",
      question18: "",
      question19: "",
      question20: "",
      question21: "",
      question22: "",
      question23: "",
      question24: "",
      question25: "",
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
    const { firstName, lastName, email, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20, question21, question22, question23, question24, question25 } = this.state;
    const values = { firstName, lastName, email, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20, question21, question22, question23, question24, question25 };

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
          <Question11
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 13:
        return (
          <Question12
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 14:
        return (
          <Question13
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 15:
        return (
          <Question14
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 16:
        return (
          <Question15
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 17:
        return (
          <Question16
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 18:
        return (
          <Question17
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 19:
        return (
          <Question18
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 20:
        return (
          <Question19
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 21:
        return (
          <Question20
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 22:
        return (
          <Question21
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 23:
        return (
          <Question22
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 24:
        return (
          <Question23
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 25:
        return (
          <Question24
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 26:
        return (
          <Question25
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 27:
        return (
          <Confirm
          nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            handleSubmit={this.handleSubmit}
            >
          </Confirm>
          
        );
      default:
        break;
    }
  }
}

export default UserForm;
