import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RaisedButton from "material-ui/RaisedButton";

class Question16 extends Component {
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
              <h3 className="question">How many songs will be performed during the halftime show? </h3>
              <RadioGroup row
                name="question16"
                id="question16"
                value={values.question16}
                onChange={handleChange}>
                <FormControlLabel value="3-5" control={<Radio />} label="3-5" onChange={handleChange("question16")} />
                <FormControlLabel value="6-8" control={<Radio />} label="6-8" onChange={handleChange("question16")} />
                <FormControlLabel value="7-10" control={<Radio />} label="7-10" onChange={handleChange("question16")} />
                <FormControlLabel value="11+" control={<Radio />} label="11+" onChange={handleChange("question16")} />
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

export default Question16;
