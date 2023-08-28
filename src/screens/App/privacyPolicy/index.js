import { View, Text } from 'react-native'
import React from 'react'
import { ComponentWrapper, MainHeader, MainWrapper } from '../../../components'

const PrivacyPolicy = () => {
  return (
   <MainWrapper>
    <MainHeader title={"Privacy Policy"}/>
    <ComponentWrapper>
        <Text>{"Here Description about Privacy Policy "}</Text>
    </ComponentWrapper>
   </MainWrapper>
  )
}

export default PrivacyPolicy