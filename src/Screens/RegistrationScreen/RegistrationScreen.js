import React,{Component} from "react";
import { View, Text, Button } from "react-native";
import Registration from '../../Components/Registration/Registration'

class RegistrationScreen extends Component {
   confirmCodeHandler = () => {
    this.props.navigator.resetTo({
      screen: "clearcar.ConfirmCodeScreen",
      title: "Enter Validation numberr",
      passProps: {
        myProp: null
      },
      animationType: 'fade'
    })
  }
  render() {
    return (
      <View>
        <Button title="Next" onPress={this.confirmCodeHandler}/>
        <Registration/>
      </View>
    );
  }
}

export default RegistrationScreen;
