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
          <div className="confirm_container">
            <h3 className="question">Confirm Questions</h3>

            <strong>How long will it take to sing the national anthem?</strong>
            <p>{question1}</p>
            <strong>Length of the word Brave during the anthem?</strong>
            <p>{question2}</p>
            <strong>What will the result of the coin toss be?</strong>
            <p>{question3}</p>
            <strong>Who will kickoff to start the game?</strong>
            <p>{question4}</p>
            <strong>Which coach will broadcasters mention first after kickoff?</strong>
            <p>{question5}</p>
            <strong>First commercial spot after the 1st quarter will feature  what brand?</strong>
            <p>{question6}</p>
            <strong>How many commercials will feature dogs?</strong>
            <p>{question7}</p>
            <strong>Which beer brand's commercial will air first? Be specific!</strong>
            <p>{question8}</p>
            <strong>Which automobile brand commercial will air first?</strong>
            <p>{question9}</p>
            <strong>How many times will they show Pat Mahomes' family on the broadcast?</strong>
            <p>{question10}</p>
            <strong>What will the first offensive play of the game be?</strong>
            <p>{question11}</p>
            <strong>Which team will commit the first penalty?</strong>
            <p>{question12}</p>
            <strong>Which team will score first?</strong>
            <p>{question13}</p>
            <strong>What will the result of the first coaches challenge be?</strong>
            <p>{question14}</p>
            <strong>What color shoes will The Weeknd wear for his halftime performance?</strong>
            <p>{question15}</p>
            <strong>How many songs will be performed during the halftime show?</strong>
            <p>{question16}</p>
            <strong>What University will be mentioned first, in any context?</strong>
            <p>{question17}</p>
            <strong>How many passing yards will Aaron Rodgers have?</strong>
            <p>{question18}</p>
            <strong>Will there be a successful two-point conversion?</strong>
            <p>{question19}</p>
            <strong>What will the final scoring play of the game be?</strong>
            <p>{question20}</p>
            <strong>Which team will win the Super Bowl?</strong>
            <p>{question21}</p>
            <strong>What color Gatorade will be dumped on the winning coach?</strong>
            <p>{question22}</p>
            <strong>Who will win Super Bowl MVP?</strong>
            <p>{question23}</p>
            <strong>Who will the Super Bowl MVP thank first?</strong>
            <p>{question24}</p>
            <strong>Will the Super Bowl MVP mention "Disney World"</strong>
            <p>{question25}</p>
          </div>
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />

          <input type="submit" value="Send to Firebase" onClick={this.continue}></input>

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

export default Confirm;
