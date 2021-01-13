import React from "react";
import firebase from "../components/firebase";
import Helmet from 'react-helmet'

const db = firebase.firestore();

class LeaderBoard extends React.Component {
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

      <div className="table-wrapper">
        <Helmet>
          <body class='body_table' />
        </Helmet>
        <table className="fl-table" cellSpacing="0 20px">
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
            <tr>
              <td>How long will it take to sing the national anthem?</td>
              {players.map((player) => (
                <td>{player.question1}</td>
              ))}
            </tr>
            <tr>
              <td>Length of the word "Brave" during the anthem?</td>
              {players.map((player) => (
                <td>{player.question2}</td>
              ))}
            </tr>
            <tr>
              <td>What will the result of the coin toss be?</td>
              {players.map((player) => (
                <td>{player.question3}</td>
              ))}
            </tr>
            <tr>
              <td>Who will win the coin toss?</td>
              {players.map((player) => (
                <td>{player.question4}</td>
              ))}
            </tr>
            <tr>
              <td>Which coach will broadcasters mention first after kickoff?</td>
              {players.map((player) => (
                <td>{player.question5}</td>
              ))}
            </tr>
            <tr>
              <td>First commercial spot after the 1st quarter will feature what brand?</td>
              {players.map((player) => (
                <td>{player.question6}</td>
              ))}
            </tr>
            <tr>
              <td>How many commercials will feature dogs?</td>
              {players.map((player) => (
                <td>{player.question7}</td>
              ))}
            </tr>
            <tr>
              <td>What beer brand's commercial will appear first?</td>
              {players.map((player) => (
                <td>{player.question8}</td>
              ))}
            </tr>
            <tr>
              <td>Will the president be referenced by the broadcasters at any point?</td>
              {players.map((player) => (
                <td>{player.question9}</td>
              ))}
            </tr>
            <tr>
              <td>How many times will they show Pat Mahomes' family on the broadcast?</td>
              {players.map((player) => (
                <td>{player.question10}</td>
              ))}
            </tr>
          </tbody>

        </table>
      </div>

    );
  }
}

export default LeaderBoard;