import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { ComponentWrapper, MainWrapper, RowWrapper, Wrapper } from '../../../components/wrappers'
import { LargeText, LargeTitle, MediumText, SmallText, XLTitle } from '../../../components/text'
import { ButtonColored } from '../../../components/buttons'
import { SCREEN, colors } from '../../../constants'
import { AuthHeader } from '../../../components/headers'
import { TextInputBordered } from '../../../components/textInput'
import { Spacer } from '../../../components/spacers'
import { styles } from './style'

import { PrimaryCheckBox, ScrollView } from '../../../components'
import { GotoSignUp, SocialLoginComponent } from './component'
import { LogText } from '../../../components/commomComponents'

const SignIn = ({ navigation }) => {
    const { replace } = navigation
    return (
        <MainWrapper>
            <StatusBar backgroundColor={colors.appBgColor4} />
            <AuthHeader />
            <Spacer isDoubleBase/>
            <ScrollView>
            <ComponentWrapper>
                <Spacer isSmall/>
            <LogText caption={"Login to Your Account"}/>
            <Spacer isBasic/>
             <TextInputBordered title="Email" placeholder={"johnmitchell@gmail.com"}/>
             <Spacer isBasic/>
             <TextInputBordered title="Password" placeholder={"Password"} iconName="eye" iconType="feather" />
             <Spacer isBasic/>
             <RowWrapper style={styles.checkwrapper}>
             <PrimaryCheckBox text={"Remember me"}/>
             <MediumText style={styles.forgot} onPress={()=>navigation.navigate(SCREEN.forgotPassword)}>{"Forgot Password?"}</MediumText>
             </RowWrapper>
             <Spacer isDoubleBase/>
                <ButtonColored text='Sign In' onPress={() => replace(SCREEN.appStack)} />
                <Spacer isMedium/>
                 <LargeTitle style={styles.or} >{"OR"}</LargeTitle>
                <Spacer isMedium/>
                <SocialLoginComponent />
                <Spacer  isBasic/>
                <GotoSignUp caption={"Don't have an account? "} next={"SIGN UP"} onPress={()=>navigation.navigate(SCREEN.signUp)}/>
            </ComponentWrapper>
            </ScrollView>
        </MainWrapper>
    )
}

export default SignIn