import { View, Text } from 'react-native'
import React from 'react'
import { AuthHeader, ButtonColored, ComponentWrapper, MainWrapper, MediumText, RowWrapper, ScrollView, Spacer, TextInputBordered } from '../../../components'
import { GotoSignUp } from '../signIn/component'
import { styles } from './style'
import { BusinessTypeList, PhoneInputs } from './component'
import { SCREEN } from '../../../constants'
import { LogText } from '../../../components/commomComponents'
import { CountryName, Data } from '../../../constants/dummyData'

const SignUp = ({navigation}) => {
  return (
   <MainWrapper>
    <AuthHeader/>
    <Spacer isDoubleBase />
    <ScrollView>
    <ComponentWrapper>
            <LogText caption={"Create your Account"}/>
            <Spacer isBasic/>
             <TextInputBordered title="Email" placeholder={"johnmitchell@gmail.com"}/>
             <Spacer isSmall/>
             <TextInputBordered title="Password" placeholder={"Password"} iconName="eye" iconType="feather"  />
             <Spacer isSmall/>
             <TextInputBordered title="Confirm Password" placeholder={"Confirm Password"} iconName="eye" iconType="feather"/>
             <Spacer isSmall/>
             <BusinessTypeList caption={"Select One"} title={"Bussines Type"} data={Data}/>
             <Spacer isSmall/>
             <BusinessTypeList caption={"Select One"} title={"Country"} data={CountryName}/>
             <Spacer isSmall/>
             <PhoneInputs title={"Phone Number"}/>
             <Spacer isMedium/>
             <ButtonColored text='Sign Up' onPress={()=>navigation.navigate(SCREEN.completeprofile)}  />
             <Spacer isMedium/>
             <GotoSignUp style={styles.textrowwrapper} caption={"Already have an aaccount? "} next={"SIGN IN"} onPress={()=>navigation.navigate(SCREEN.signIn)}/>
            <Spacer isMedium/>
    </ComponentWrapper>
    </ScrollView>
   </MainWrapper>
  )
}

export default SignUp