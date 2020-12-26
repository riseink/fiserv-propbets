import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    //Process your form//
    // ...........................
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { 
      values: { gender, firstName, lastName, email, occupation, city, bio } 
    } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" style={{ background: '#f60' }} />
          <List>
          <ListItem
              primaryText="Gender"
              secondaryText={gender}
            />
            <ListItem
              primaryText="First Name"
              secondaryText={firstName}
            />
            <ListItem
              primaryText="Last Name"
              secondaryText={lastName}
            />
            <ListItem
              primaryText="Email"
              secondaryText={email}
            />
            <ListItem
              primaryText="Occupation"
              secondaryText={occupation}
            />
            <ListItem
              primaryText="City"
              secondaryText={city}
            />
            <ListItem
              primaryText="Bio"
              secondaryText={bio}
            />
          </List>
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
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
