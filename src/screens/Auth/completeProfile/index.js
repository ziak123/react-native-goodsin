import { View, Text } from 'react-native'
import React from 'react'
import { AuthHeader, ButtonColored, ComponentWrapper, MainWrapper, Spacer, TextInputBordered, Wrapper } from '../../../components'

import { styles } from './style'
import { LogText, ProfileComponent } from '../../../components/commomComponents'
import { SCREEN } from '../../../constants'

const CompleteProfile = ({navigation}) => {
  return (
    <MainWrapper >
        <AuthHeader />
        <ComponentWrapper>
        <Spacer isDoubleBase/>
            <LogText caption={"Complete Profile"} />
            <Spacer isBasic/>
            <ProfileComponent />
            <Spacer isBasic/>
             <TextInputBordered  title="Company Name" placeholder={"Company Name"}  />
        </ComponentWrapper>
        <ComponentWrapper style={styles.btn}>
        <ButtonColored text='Next' onPress={()=>navigation.navigate(SCREEN.subscription)} />
        </ComponentWrapper>
    </MainWrapper>
  )
}

export default CompleteProfile