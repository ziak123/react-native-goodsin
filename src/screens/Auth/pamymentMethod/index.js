import { View, Text } from 'react-native'
import React from 'react'
import { AuthHeader, ButtonColored, ComponentWrapper, MainHeader, MainWrapper, MediumText, RowWrapper, ScrollView, Spacer, TextInputBordered, Wrapper } from '../../../components'
import { PaymentCard } from './component'
import { PaymentCardContainer } from '../../../constants/dummyData'
import { styles } from './style'
import { SCREEN, colors } from '../../../constants'
import { StatusBar } from 'react-native'

const PaymentMehtod = ({navigation}) => {
  return (
<MainWrapper>
<StatusBar backgroundColor={colors.appBgColor14}/>
  <MainHeader title={"Payment Method"}/>
  <PaymentCard data={PaymentCardContainer}/>
  <ComponentWrapper style={styles.btn}>
        <ButtonColored text='Next' onPress={()=>navigation.navigate(SCREEN.paymentmethodform)} />
        </ComponentWrapper>
</MainWrapper>
  )
}

export default PaymentMehtod