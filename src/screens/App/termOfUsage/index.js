import { View, Text } from 'react-native'
import React from 'react'
import { ComponentWrapper, MainHeader, MainWrapper } from '../../../components'

const TermOfUsage = () => {
  return (
   <MainWrapper>
    <MainHeader title={"Term of use"}/>
    <ComponentWrapper>
        <Text>{"Here Description of Use from Data Base"}</Text>
    </ComponentWrapper>
   </MainWrapper>
  )
}

export default TermOfUsage