import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Link } from "gatsby"
import RaisedButton from "material-ui/RaisedButton";
import Helmet from 'react-helmet'

class Final extends Component {
  

  render() {

    return (
      <MuiThemeProvider>
        <React.Fragment>
        <Helmet>
          <body class='body_submitted' />
        </Helmet>
        <div className="question_wrapper confirm_final">
        <div className="question_container">

          <h3 className="question">Your bets have been submitted</h3>
          <p>Review your submission here</p>
          <Link to="/my_bets"> My Bets </Link>
     
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

export default Final;
