import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { AuthHeader, ButtonColored, ComponentWrapper, MainHeader, MainWrapper, MediumText, RowWrapper, ScrollView, Spacer, TextInputBordered, Wrapper } from '../../../components'
import { OTPTitleText } from '../../../components/commomComponents'
import { SCREEN, colors } from '../../../constants'
import { styles } from './style'

const CreatePassword = ({navigation}) => {
  return (
    <MainWrapper>
        <StatusBar backgroundColor={colors.appBgColor14}/>
        <MainHeader  style={styles.head} title={" Create new Password"}/>
        <Spacer isTiny/>
        <ComponentWrapper>
            <OTPTitleText title={"Enter New Password and confirm"}/>
            <Spacer isXSmall/>
             <TextInputBordered titleStyle={styles.title} containerStyle={styles.buttn} title="Password" placeholder={"Password"} iconName="eye" iconType="feather" />
             <Spacer isXSmall/>
             <TextInputBordered titleStyle={styles.title} containerStyle={styles.buttn} title="Confirm Password" placeholder={"Confirm Password"} iconName="eye" iconType="feather" />
        </ComponentWrapper>
        <Wrapper style={styles.btn}>
             <ButtonColored  text='Done' onPress={()=>navigation.navigate(SCREEN.signIn)}  />
             </Wrapper>
    </MainWrapper> 
  )
}

export default CreatePassword