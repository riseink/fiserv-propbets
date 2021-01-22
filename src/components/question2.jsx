import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RaisedButton from "material-ui/RaisedButton";

class Question2 extends Component {
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
              <a onClick={this.back}><img src='/question_chevron_back.png'></img></a>
            </div>
            <div className="question_container">
              <h3 className="question">Length of the word "Brave" during the anthem?</h3>
              <RadioGroup 
                name="question2"
                id="question2"
                value={values.question2}
                onChange={handleChange}>
                <FormControlLabel value="Over 5 Seconds" control={<Radio />} label="Over 5 Seconds" onChange={handleChange("question2")} />
                <FormControlLabel value="Under 5 Seconds" control={<Radio />} label="Under 5 Seconds" onChange={handleChange("question2")} />
              </RadioGroup>
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
              <a onClick={this.continue}><img src='/question_chevron_forward.png'></img></a>
            </div>

          </div>
  <div className="pad_bottom"></div>      </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Question2;
