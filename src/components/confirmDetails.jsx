import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

class Confirm extends Component {
  continue = e => {
    this.props.handleSubmit(e);
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20, question21, question22, question23, question24, question25 }
    } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
        <div className="question_wrapper confirm_bets">
        <div className="question_container">

          <h3 className="question">Thanks for your participation in the Hall of Fame Challenge!</h3>
          <p>All bets are final!</p>

          <input type="submit" value="Place My Bet" onClick={this.continue}></input>
          <br />
          <RaisedButton
                label="Back"
                primary={false}
                style={styles.button}
                onClick={this.back}
              />
      </div></div>
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

export default Confirm;
