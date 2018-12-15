import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";

// import startMainTabs from '../MainTabs/startMainTabs';
import Icon from 'react-native-vector-icons/Ionicons';

class DocumentScreen extends Component {
  state = {
    checked: false
  };

  checkboxHandler = () => {
    this.setState(prevState => {
      return {
        checked: !prevState.checked
      }
    })
  }

  termsAgreeHandler = () => {
    this.props.navigator.resetTo({
      screen: "clearcar.RegistrationScreen",
      title: "Enter Your Phone Number",
      passProps: {
        myProp: null
      },
      animationType: 'fade'
    })
    // startMainTabs();
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
            quam reprehenderit. Corrupti quibusdam perspiciatis eum asperiores
            voluptatibus? Iusto voluptas quae accusamus labore suscipit! Nemo
            modi rem fugiat eos ratione cupiditate?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ab, tenetur! Necessitatibus rem cumque
            cupiditate enim reiciendis quaerat quam corporis, tempore voluptatem
            error odio quas, quia quo inventore rerum beatae harum, voluptas
            vitae commodi nesciunt iste alias.
          </Text>
        <View style={styles.checkboxWrraper}>
          <TouchableOpacity style={styles.checkbox} onPress={this.checkboxHandler}>
          {this.state.checked ? <Icon name="ios-checkmark" size={30} color="green"/> : null}
          </TouchableOpacity>
          <Text>I agree</Text>
          <Button title="Continue" onPress={this.termsAgreeHandler}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  checkboxWrraper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderRadius: 2,
    paddingLeft: 7
  }
});

export default DocumentScreen;
