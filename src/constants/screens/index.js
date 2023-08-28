import { height } from 'react-native-dimension'
import { colors } from '../colors';
export const SCREEN = {
    // stacks
    authStack: 'authStack',
    appStack: 'appStack',

    // AuthNavigation
    splash: 'splash',
    signIn: 'signIn',
    signUp:'signUp',
    completeprofile:'completeprofile',
    forgotPassword:'forgotPassword',
    otp:'otp',
    createpassword:'createpassword',
    paymentmethod:"paymentmethod",
    paymentmethodform:"paymentmethodform",

    // AppNavigation
    home: 'home',
   report:'report',
   checkindelivery:'checkindelivery',
   addcountryorigin:"addcountryorigin",
   profile:'profile',
   editprofile:'editprofile',
   termofusage:'termofusage',
   privacypolicy:'privacypolicy',
   aboutapp:"aboutapp",
   subscription:'subscription',
   helpcenter:'helpcenter'

}


export const tabs = {
    screenOptions: {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.appBgColor4,
        tabBarInactiveTintColor: colors.iconColor4,
        tabBarStyle: {
            elevation: 15,
            backgroundColor: colors.appBgColor2,
            height: height(7)

        },
    }
};