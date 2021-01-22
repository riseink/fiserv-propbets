import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RaisedButton from "material-ui/RaisedButton";

class Question5 extends Component {
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
              <h3 className="question">Which coach will broadcasters mention first after kickoff?</h3>
              <RadioGroup 
                name="question5"
                id="question5"
                value={values.question5}
                onChange={handleChange}>
                <FormControlLabel value="NFC" control={<Radio />} label="NFC" onChange={handleChange("question5")} />
                <FormControlLabel value="AFC" control={<Radio />} label="AFC" onChange={handleChange("question5")} />
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

export default Question5;
