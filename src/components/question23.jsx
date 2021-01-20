import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class Question23 extends Component {
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
            <div className="question_chevron">
              <a onClick={this.back}><img src='question_chevron_back.png'></img></a>
            </div>
            <div className="question_container">
              <h3 className="question">Who will win Super Bowl MVP?</h3>
              <TextField
                hintText="Please write in your answer"
                floatingLabelText="Please write in your answer"
                onChange={handleChange("question23")}
                value={values.question23}
                id="question23"
                name="question23"
              />
              <br />
              <RaisedButton
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
              />

              
              <RaisedButton
                label="Back"
                primary={false}
                style={styles.button}
                onClick={this.back}
              />
            </div>
            <div className="question_chevron">
              <a onClick={this.continue}><img src='question_chevron_forward.png'></img></a>
            </div>

          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    marginTop: 15,
    marginRight:15,
  }
};

export default Question23;