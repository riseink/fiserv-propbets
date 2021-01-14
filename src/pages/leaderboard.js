import React from "react";
import firebase from "../components/firebase";
import Helmet from 'react-helmet'
import LayoutLeader from "../components/layout_leader"

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
      .orderBy("score",  "desc")
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
      <LayoutLeader>
      <div className="table-wrapper">
        <Helmet>
          <body class='body_leaderboard' />
        </Helmet>

        <div className="leaderboard_copy">
        <h2>LeaderBoard</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum metus aliquet tortor accumsan vulputate. Nam accumsan nibh ut augue vulputate rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>

        <table className="fl-table" cellSpacing="0 20px">
          <thead>
            <tr>
              <th>TEAM</th>
              <th>PLAYER</th>
              <th>LOCATION</th>
              <th>HALL OF FAMER</th>
              <th>ANSWERS</th>
              <th>POINTS</th>
            </tr>
          </thead>
          <tbody>
            
              {players.map((player) => (
                <tr>
                <td><span className="rank_span">{player.rank}</span> <span className="team_span">{player.player_team_name}</span></td>
                <td>{player.player_last_name}, {player.player_first_name}</td>
                <td>{player.player_location}</td>
                <td>{player.player_hall_of_fame}</td>
                <td>{player.player_tally}</td>
                <td>{player.score}</td>
                </tr>
              ))}
            

          </tbody>

        </table>

      </div>
      <div className="hof_logo">
        <img className="img_responsive" alt="chevron" src="/HOF_logo.png" />

        </div>
      </LayoutLeader>
    );
  }
}

export default Ledger;