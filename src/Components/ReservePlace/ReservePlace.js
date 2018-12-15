import React, {Component} from 'react';
import {View, Button, Text, StyleSheet, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import MapView from "react-native-maps";

class ReservePlace extends Component {
  state = {
    focusedLocation: {
      latitude: 40.177738,
      longitude: 44.501404,
      latitudeDelta: 0.0122,
      longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0122
    },
    locationChosen: false
  }

  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    this.reservePlaceMap.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    });
    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        locationChosen: true
      };
    });
  }

  getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const coordsEvent = {
        nativeEvent: {
          coordinate: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          }
        }
      };
      this.pickLocationHandler(coordsEvent);
    }, err => {
      console.log(err);
      alert("Fetching The Position Faild, Please Pick One Manually!")
    })
  }


  render() {
    let marker = null;
    if(this.state.locationChosen) {
      marker = <MapView.Marker coordinate={this.state.focusedLocation}/>
    }
    return (
      //scrolviwwe
      <View>
        <MapView 
        initialRegion={this.state.focusedLocation}
        style={styles.map}
        onPress={this.pickLocationHandler}
        ref={ref => this.reservePlaceMap = ref }>
        {marker}
        </MapView>
        <MapView.Callout>
          <Button title="locate me" onPress={this.getLocationHandler}/>
        </MapView.Callout>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%'
  }
})


export default connect(null,null)(ReservePlace);