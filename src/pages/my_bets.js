import React from "react";
import firebase from "../components/firebase";
import Helmet from 'react-helmet'
import LayoutAlt from "../components/layout_alt"

const db = firebase.firestore();

if (typeof window !== "undefined") {
  var accessKeyValue = localStorage.getItem('FISERV_ACCESS_KEY');
}

class MyLedger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  

  componentDidMount() {

    db.collection("players").where("accessKey", "==", accessKeyValue)
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
          <body class='body_my_ledger' />
        </Helmet>
        <table className="fl-table ">
          <thead>
            <tr>
              <th>Question</th>
              {players.map((player) => (
                <th>
                  My Answer
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
              <td>How many times will they show Pat Mahomes' family on the broadcast?</td>
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
              <td>Who will kickoff to start the game?</td>
              {players.map((player) => (
                <td>{player.question14}</td>
              ))}
            </tr>
            <tr key="15">
              <td>Which coach will broadcasters mention first after kickoff?</td>
              {players.map((player) => (
                <td>{player.question15}</td>
              ))}
            </tr>
            <tr key="16">
              <td>First commercial spot after the 1st quarter will feature  what brand?</td>
              {players.map((player) => (
                <td>{player.question16}</td>
              ))}
            </tr>
            <tr key="17">
              <td>How many commercials will feature dogs?</td>
              {players.map((player) => (
                <td>{player.question17}</td>
              ))}
            </tr>
            <tr key="18">
              <td>Which beer brand's commercial will air first? Be specific!</td>
              {players.map((player) => (
                <td>{player.question18}</td>
              ))}
            </tr>
            <tr key="19">
              <td>Which automobile brand commercial will air first?</td>
              {players.map((player) => (
                <td>{player.question19}</td>
              ))}
            </tr>
            <tr key="20">
              <td>How many times will they show Pat Mahomes' family on the broadcast?</td>
              {players.map((player) => (
                <td>{player.question20}</td>
              ))}
            </tr>
            <tr key="21">
              <td>How many times will they show Pat Mahomes' family on the broadcast?</td>
              {players.map((player) => (
                <td>{player.question21}</td>
              ))}
            </tr>
            <tr key="22">
              <td>How many times will they show Pat Mahomes' family on the broadcast?</td>
              {players.map((player) => (
                <td>{player.question22}</td>
              ))}
            </tr>
            <tr key="23">
              <td>How many times will they show Pat Mahomes' family on the broadcast?</td>
              {players.map((player) => (
                <td>{player.question23}</td>
              ))}
            </tr>
            <tr key="24">
              <td>How many times will they show Pat Mahomes' family on the broadcast?</td>
              {players.map((player) => (
                <td>{player.question24}</td>
              ))}
            </tr>
            <tr key="25">
              <td>How many times will they show Pat Mahomes' family on the broadcast?</td>
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

export default MyLedger;