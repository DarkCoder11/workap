import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import startMainTabs from '../MainTabs/startMainTabs';

class ConfirmCode extends Component {
  render() {
    return (
      <View>
        <Text>this is confirmCode page</Text>
        <Text>confirmCode</Text>
        <Button title="Next" onPress={startMainTabs}/>
      </View>
    );
  }
}

export default ConfirmCode;
