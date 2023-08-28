import React, { useRef } from 'react'
import { View, } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as App from '../../screens/App'
import { SCREEN, colors, tabs } from '../../constants';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { appImages } from '../../utilities/assets';

const { Navigator, Screen } = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (

    <Tab.Navigator screenOptions={tabs.screenOptions} >
      <Tab.Screen options={{
        tabBarIcon: ({ color,focused  }) => (
          <Image source={appImages.document} style={{tintColor: focused ? colors.appBgColor4 : colors.appBgColor3}}/>
        ),
      }} name="Home" component={App.Home} />
      <Tab.Screen options={{
        tabBarIcon: ({ color , focused }) => (
          <Image source={appImages.table} style={{tintColor: focused ? colors.appBgColor4 : colors.appBgColor3}}/>
        ),
      }} name="report" component={App.Report} />
       <Tab.Screen options={{
        tabBarIcon: ({ color,focused  }) => (
          <Image source={appImages.setting} style={{tintColor: focused ? colors.appBgColor4 : colors.appBgColor3}}/>
        ),
      }} name="setting" component={App.Setting} />
    </Tab.Navigator>
  );
}
const AppNavigation = () => {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={SCREEN.home}>
            <Screen name={SCREEN.home} component={MyTabs} />
            <Screen name={SCREEN.checkindelivery} component={App.CheckInDelivery} />
            <Screen name={SCREEN.addcountryorigin} component={App.AddCountryOrigin} />
            <Screen name={SCREEN.profile} component={App.Profile} />
            <Screen name={SCREEN.editprofile} component={App.EditProfile} />
            <Screen name={SCREEN.termofusage} component={App.TermOfUsage} />
            <Screen name={SCREEN.privacypolicy} component={App.PrivacyPolicy} />
            <Screen name={SCREEN.aboutapp} component={App.AboutApp} />
            <Screen name={SCREEN.helpcenter} component={App.HelpCeter} />
        </Navigator>
    );
};
export default AppNavigation


