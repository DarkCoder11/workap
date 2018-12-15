import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS === "android" ? "ios-person" : "ios-man", 30),
    Icon.getImageSource(Platform.OS === "android" ? "md-compass":"ios-compass", 30),
    Icon.getImageSource(Platform.OS === "android" ? "md-menu" : "ios-menu", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "clearcar.OrderDriverScreen",
          label: "Order Driver",
          title: "Order Driver",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "clearcar.ReservePlaceScreen",
          label: "Reserve WashPlace",
          title: "Reserve WashPlace",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        }
      ],
      tabsStyle: {
        // tabBarButtonColor: '#f4b05d',
        tabBarSelectedButtonColor: 'orange',
        // tabBarBackgroundColor: ''
      },
      drawer: {
        left: {
          screen: "clearcar.SideDrawer"
        }
      },
      appStyle: {
        tabBarSelectedButtonColor: 'orange',
      },
    });
  })

};

export default startTabs;
