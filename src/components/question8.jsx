import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class Question8 extends Component {
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
              <h3 className="question">What beer brand's commercial will appear first?</h3>
              <TextField
                hintText="Please write in your answer"
                floatingLabelText="Please write in your answer"
                onChange={handleChange("question8")}
                value={values.question8}
                id="question8"
                name="question8"
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
    marginRight: 15,
  }
};

export default Question8;
