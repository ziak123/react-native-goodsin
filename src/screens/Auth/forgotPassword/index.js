import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { AuthHeader, ButtonColored, ComponentWrapper, MainHeader, MainWrapper, MediumText, RowWrapper, ScrollView, Spacer, TextInputBordered, Wrapper } from '../../../components'
import { OTPTitleText } from '../../../components/commomComponents'
import { SCREEN, colors } from '../../../constants'
import { styles } from './style'

const ForgotPassword = ({navigation}) => {
  return (
    <MainWrapper>
        <StatusBar backgroundColor={colors.appBgColor14}/>
        <MainHeader  style={styles.head} title={" Forogt Password"}/>
        <Spacer isTiny/>
        <ComponentWrapper>
            <OTPTitleText title={"Enter Email to Recieve OTP"}/>
            <Spacer isXSmall/>
             <TextInputBordered titleStyle={styles.title} containerStyle={styles.buttn} title="Email" placeholder={"johnmitchell@gmail.com"}/>
        </ComponentWrapper>
        <Wrapper style={styles.btn}>
             <ButtonColored  text='Next' onPress={()=>navigation.navigate(SCREEN.otp)}  />
             </Wrapper>
    </MainWrapper> 
  )
}

export default ForgotPassword