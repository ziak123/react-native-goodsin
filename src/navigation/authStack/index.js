import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN } from '../../constants';
import * as Auth from '../../screens/Auth'
const { Navigator, Screen } = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={SCREEN.signIn}>
            <Screen name={SCREEN.signIn} component={Auth.SignIn} />
            <Screen name={SCREEN.signUp} component={Auth.SignUp} />
            <Screen name={SCREEN.completeprofile} component={Auth.CompleteProfile} />
            <Screen name={SCREEN.forgotPassword} component={Auth.ForgotPassword} />
            <Screen name={SCREEN.otp} component={Auth.OTP} />
            <Screen name={SCREEN.createpassword} component={Auth.CreatePassword} />
            <Screen name={SCREEN.subscription} component={Auth.Subscription} />
            <Screen name={SCREEN.paymentmethod} component={Auth.PaymentMehtod} />
            <Screen name={SCREEN.paymentmethodform} component={Auth.PaymentMethodForm} />
        </Navigator>
    );
};
export default AuthNavigation;