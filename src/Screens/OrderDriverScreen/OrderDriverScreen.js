import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import OrderDriver from '../../Components/OrderDriver/OrderDriver';

class OrderDriverScreen extends Component {
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
      //scrolviwwe
      <View>
          <OrderDriver/>
      </View>
    )
  }
}


export default connect(null,null)(OrderDriverScreen);