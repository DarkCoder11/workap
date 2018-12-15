import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ReservePlace from '../../Components/ReservePlace/ReservePlace';

class ReservePlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: "orange"
  }
  
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if(event.type === "NavBarButtonPress") {
      if(event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  }
  render() {
    return (
      <View>
        <ReservePlace />
      </View>
    )
  }
}

export default ReservePlaceScreen;