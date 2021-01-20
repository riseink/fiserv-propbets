
import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RaisedButton from "material-ui/RaisedButton";

class Question22 extends Component {
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
              <h3 className="question">What color Gatorade will be dumped on the winning coach?</h3>
              <RadioGroup row
                name="question22"
                id="question22"
                value={values.question22}
                onChange={handleChange}>
                <FormControlLabel value="Orange" control={<Radio />} label="Orange" onChange={handleChange("question22")} />
                <FormControlLabel value="Purple" control={<Radio />} label="Purple" onChange={handleChange("question22")} />
                <FormControlLabel value="Yellow" control={<Radio />} label="Yellow" onChange={handleChange("question22")} />
                <FormControlLabel value="Other" control={<Radio />} label="Other" onChange={handleChange("question22")} />
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
    margin: 15
  }
};

export default Question22;
