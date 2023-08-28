import { View, Text } from 'react-native'
import React from 'react'
import { ComponentWrapper, MainHeader, MainWrapper, Spacer, TextInputBordered } from '../../../components'
import { styles } from './style'
import { CardTitle } from '../../../components/commomComponents'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { colors } from '../../../constants'

const AddCountryOrigin = () => {
  return (
    <MainWrapper>
        <MainHeader title={"Today's Activities"}/>
        <Spacer isTiny/>
      <ComponentWrapper style={styles.comp}>
        <Spacer isSmall/>
       <ComponentWrapper>
        <CardTitle style={styles.title} title={"Add Country Or Origin"}/>
        <Spacer isBasic/>
        <Spacer isTiny/>
        <TextInputBordered containerStyle={styles.button} title="Add Country" placeholder={"Add Country"}  />
        <Spacer isXSmall/>
        <TouchableOpacity style={styles.btn}>
        <Icon name='plus' type='feather' size={28} color={colors.iconColor4}/>
        </TouchableOpacity>
        <Spacer isXSmall/>
       </ComponentWrapper>
      </ComponentWrapper>
    </MainWrapper>
  )
}

export default AddCountryOrigin