import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import configureStore from "./src/Store/configureStore";

import TermsScreen from "./src/Screens/TermsScreen/TermsScreen";
import OrderDriverScreen from "./src/Screens/OrderDriverScreen/OrderDriverScreen";
import ReservePlaceScreen from "./src/Screens/ReservePlaceScreen/ReservePlaceScreen";
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import ConfirmCodeScreen from './src/Screens/ConfirmCodeScreen/ConfirmCodeScreen';
import SideDrawer from './src/Screens/SideDrawer/SideDrawer';

const store = configureStore();

//Register Screens

Navigation.registerComponent(
  "clearcar.TermsScreen",
  () => TermsScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "clearcar.OrderDriverScreen",
  () => OrderDriverScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "clearcar.ReservePlaceScreen",
  () => ReservePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "clearcar.RegistrationScreen",
  () => RegistrationScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "clearcar.ConfirmCodeScreen",
  () => ConfirmCodeScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "clearcar.SideDrawer",
  () => SideDrawer,
  store,
  Provider
);

//start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "clearcar.TermsScreen",
    title: "Terms"
  }
});

// import React, {Component} from 'react';
// import {StyleSheet, Text, View, Button} from 'react-native';
// import {connect} from 'react-redux';
// import {orderDriver} from './src/Store/actions/index';

// class App extends Component {

//   render() {
//     console.log(this.props)
//     return (
//       <View style={styles.container}>
//       <Button title="button" onPress={this.props.onOrderDriver}/>
//       <Text>{this.props.orderDriver}</Text>
//         <Text>Welcome to React Native!</Text>
//         <Text>To get started, edit App.js</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })

// const mapStateToProps = state => {
//   console.log(state, 'state')
//   return {
//     orderDriver: state.orderDriver.item
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onOrderDriver: () => dispatch(orderDriver())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
