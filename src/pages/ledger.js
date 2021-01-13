import React from "react";
import firebase from "../components/firebase"

const db = firebase.firestore();

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        players: []
    };
  }

  componentDidMount() {
    db.collection("players")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ players: data });
      });
  }

  render() {
    const { players } = this.state;
    return (
      <div>
        {players.map(player => (
          <div key={player.id} className="col-lg-6 col-md-6 col-s-12 mb-4">
            <div className="card h-100">
              <div className="card">
                <div className="card-body">
                  <h5>{player.player_first_name} {player.player_last_name}</h5>
                  <p>How long will it take to sing the national anthem? <br />
                  <span style={{color : 'red'}}>{player.question1}</span>
                  </p>
                  <p>Length of the word "Brave" during the anthem? <br />
                  <span style={{color : 'red'}}>{player.question2}</span>
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default LeaderBoard;
