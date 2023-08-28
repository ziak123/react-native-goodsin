import { View, Text } from 'react-native'
import React from 'react'
import { ComponentWrapper, MainHeader, MainWrapper } from '../../../components'

const AboutApp = () => {
  return (
    <MainWrapper>
        <MainHeader title={"About App"}/>
        <ComponentWrapper>
            <Text>{"Here About description from Data Base"}</Text>
        </ComponentWrapper>
    </MainWrapper>
  )
}

export default AboutApp