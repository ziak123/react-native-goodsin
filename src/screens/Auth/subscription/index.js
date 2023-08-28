import { View, Text } from 'react-native'
import React from 'react'
import { ButtonColored, ComponentWrapper, MainHeader, MainWrapper, Spacer, Wrapper } from '../../../components'
import { Card } from './component'
import { SubscriptionCardDetail } from '../../../constants/dummyData'
import { styles } from './style'
import { SCREEN, colors } from '../../../constants'
import { StatusBar } from 'react-native'

const Subscription = ({navigation}) => {
  return (
<MainWrapper>
<StatusBar backgroundColor={colors.appBgColor14}/>
    <MainHeader title={"Subscription"}/>
    <ComponentWrapper>
        <Text style={styles.text}>{"Choose your Plan"}</Text>
        <Spacer  isSmall/>
        <Card data={SubscriptionCardDetail}/>
    </ComponentWrapper>
    <ComponentWrapper style={styles.btn}>
        <ButtonColored text='Next' onPress={()=>navigation.navigate(SCREEN.paymentmethod)} />
        </ComponentWrapper>
</MainWrapper>
  )
}

export default Subscription