import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RaisedButton from "material-ui/RaisedButton";

class Question7 extends Component {
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
              <h3 className="question">How many commercials will feature dogs?</h3>
              <RadioGroup row className="break_row"
                name="question7"
                id="question7"
                value={values.question7}
                onChange={handleChange}>
                <FormControlLabel value="0" control={<Radio />} label="O" onChange={handleChange("question7")} />
                <FormControlLabel value="1-2" control={<Radio />} label="1-2" onChange={handleChange("question7")} />
                <FormControlLabel value="3 - 4" control={<Radio />} label="3 - 4" onChange={handleChange("question7")} />
                <FormControlLabel value="5+" control={<Radio />} label="5+" onChange={handleChange("question7")} />
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

export default Question7;
