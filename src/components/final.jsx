import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Link } from "gatsby"
import RaisedButton from "material-ui/RaisedButton";

class Final extends Component {
  

  render() {

    return (
      <MuiThemeProvider>
        <React.Fragment>
        <div className="question_wrapper confirm_bets">
        <div className="question_container">

          <h3 className="question">Your Bet has entered</h3>
          <p>Review your submission here</p>
          <Link to="/my_bets"> my bets </Link>
     
      </div></div>
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

export default Final;
