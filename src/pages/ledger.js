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
                  {player.player_first_name} {player.player_last_name}
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
              <td>Who will win the coin toss?</td>
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
              <td>First commercial spot after the 1st quarter will feature what brand?</td>
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
              <td>What beer brand's commercial will appear first?</td>
              {players.map((player) => (
                <td>{player.question8}</td>
              ))}
            </tr>
            <tr key="9">
              <td>Will the president be referenced by the broadcasters at any point?</td>
              {players.map((player) => (
                <td>{player.question9}</td>
              ))}
            </tr>
            <tr key="10">
              <td>How many times will they show Pat Mahomes' family on the broadcast?</td>
              {players.map((player) => (
                <td>{player.question10}</td>
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