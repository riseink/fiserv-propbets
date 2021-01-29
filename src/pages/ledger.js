import React from "react";
import firebase from "../components/firebase";
import Helmet from 'react-helmet'
import LayoutAlt from "../components/layout_alt"

const db = firebase.firestore();

class Ledger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    db.collection("players")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(data);
        this.setState({ players: data });
      });
  }

  render() {
    const { players } = this.state;

    return (
      <LayoutAlt>
      <div className="ledger_table">
      <div className="table-wrapper ">
        <Helmet>
          <body class='body_ledger' />
        </Helmet>
        <table className="fl-table ">
          <thead>
            <tr>
              <th>Question</th>
              {players.map((player) => (
                <th>
                  {player.accessKey}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
          <tr key="1">
              <td>How long will it take to sing the national anthem?</td>
              {players.map((player) => (
                <td>{player.question1}</td>
              ))}
            </tr>
            <tr key="2">
              <td>Length of the word "Brave" during the anthem?</td>
              {players.map((player) => (
                <td>{player.question2}</td>
              ))}
            </tr>
            <tr key="3">
              <td>What will the result of the coin toss be?</td>
              {players.map((player) => (
                <td>{player.question3}</td>
              ))}
            </tr>
            <tr key="4">
              <td>Who will kickoff to start the game?</td>
              {players.map((player) => (
                <td>{player.question4}</td>
              ))}
            </tr>
            <tr key="5">
              <td>Which coach will broadcasters mention first after kickoff?</td>
              {players.map((player) => (
                <td>{player.question5}</td>
              ))}
            </tr>
            <tr key="6">
              <td>First commercial spot after the 1st quarter will feature  what brand?</td>
              {players.map((player) => (
                <td>{player.question6}</td>
              ))}
            </tr>
            <tr key="7">
              <td>How many commercials will feature dogs?</td>
              {players.map((player) => (
                <td>{player.question7}</td>
              ))}
            </tr>
            <tr key="8">
              <td>Which beer brand's commercial will air first? Be specific!</td>
              {players.map((player) => (
                <td>{player.question8}</td>
              ))}
            </tr>
            <tr key="9">
              <td>Which automobile brand commercial will air first?</td>
              {players.map((player) => (
                <td>{player.question9}</td>
              ))}
            </tr>
            <tr key="10">
              <td>How many times will they show Tom Brady's family on the broadcast?</td>
              {players.map((player) => (
                <td>{player.question10}</td>
              ))}
            </tr>
            <tr key="11">
              <td>What will the first offensive play of the game be?</td>
              {players.map((player) => (
                <td>{player.question11}</td>
              ))}
            </tr>
            <tr key="12">
              <td>Which team will commit the first penalty?</td>
              {players.map((player) => (
                <td>{player.question12}</td>
              ))}
            </tr>
            <tr key="13">
              <td>What will the result of the coin toss be?</td>
              {players.map((player) => (
                <td>{player.question13}</td>
              ))}
            </tr>
            <tr key="14">
              <td>What will the result of the first coaches challenge be?</td>
              {players.map((player) => (
                <td>{player.question14}</td>
              ))}
            </tr>
            <tr key="15">
              <td>What color shoes will The Weeknd wear for his halftime performance?</td>
              {players.map((player) => (
                <td>{player.question15}</td>
              ))}
            </tr>
            <tr key="16">
              <td>How many songs will be performed during the halftime show? </td>
              {players.map((player) => (
                <td>{player.question16}</td>
              ))}
            </tr>
            <tr key="17">
              <td>What University will be mentioned first, in any context? </td>
              {players.map((player) => (
                <td>{player.question17}</td>
              ))}
            </tr>
            <tr key="18">
              <td>How many passing yards will Patrick Mahomes have?</td>
              {players.map((player) => (
                <td>{player.question18}</td>
              ))}
            </tr>
            <tr key="19">
              <td>Will there be a successful two-point conversion?</td>
              {players.map((player) => (
                <td>{player.question19}</td>
              ))}
            </tr>
            <tr key="20">
              <td>What will the final scoring play of the game be?</td>
              {players.map((player) => (
                <td>{player.question20}</td>
              ))}
            </tr>
            <tr key="21">
              <td>Which team will win the Super Bowl?</td>
              {players.map((player) => (
                <td>{player.question21}</td>
              ))}
            </tr>
            <tr key="22">
              <td>What color Gatorade will be dumped on the winning coach?</td>
              {players.map((player) => (
                <td>{player.question22}</td>
              ))}
            </tr>
            <tr key="23">
              <td>Who will win Super Bowl MVP?</td>
              {players.map((player) => (
                <td>{player.question23}</td>
              ))}
            </tr>
            <tr key="24">
              <td>Who will the Super Bowl MVP thank first? </td>
              {players.map((player) => (
                <td>{player.question24}</td>
              ))}
            </tr>
            <tr key="25">
              <td>Will the Super Bowl MVP mention "Disney World"?</td>
              {players.map((player) => (
                <td>{player.question25}</td>
              ))}
            </tr>
            <tr key="26">
              <td>TIEBREAKER - Total points scored by both teams </td>
              {players.map((player) => (
                <td>{player.question26}</td>
              ))}
            </tr>
          </tbody>

        </table>
      </div>
      </div>
      </LayoutAlt>

    );
  }
}

export default Ledger;