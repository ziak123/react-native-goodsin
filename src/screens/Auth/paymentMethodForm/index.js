import { View, Text } from 'react-native'
import React from 'react'
import { AuthHeader, ButtonColored, ComponentWrapper, MainHeader, MainWrapper, MediumText, RowWrapper, ScrollView, Spacer, TextInputBordered, Wrapper } from '../../../components'
import { styles } from './style'
import { appImages } from '../../../utilities/assets'
import { SCREEN } from '../../../constants'

const PaymentMethodForm = ({navigation}) => {
  return (
    <MainWrapper>
        <MainHeader title={"Payment Method"}/>
        <ComponentWrapper>
        <Spacer isBasic/>
             <TextInputBordered title="Card Name" placeholder={"join"}/>
             <Spacer isBasic/>
             <TextInputBordered title="Card Number" placeholder={"9933214536"}/>
            <Spacer isBasic/>
             <RowWrapper>
             <TextInputBordered iconName="calendar-o" iconType="font-awesome" containerStyle={styles.expiryinput} title="Expiry Date" placeholder={"07/26"}/>
             <Spacer isBasic/>
             <TextInputBordered iconName="help-circle-outline" iconType="ionicon" iconSize={18} containerStyle={styles.expiryinput} title="Expiry Date" placeholder={"***"}/>
             </RowWrapper>
        </ComponentWrapper>
        <ComponentWrapper style={styles.btn}>
        <ButtonColored text='Done' onPress={()=>navigation.navigate(SCREEN.appStack)} />
        </ComponentWrapper>
    </MainWrapper>
  )
}

export default PaymentMethodForm