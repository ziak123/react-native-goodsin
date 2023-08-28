import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { ComponentWrapper, MainWrapper, Spacer } from '../../../components'
import { styles } from './style'
import { colors } from '../../../constants'
import { SettingContainerList } from './component'
import { SettingDataContainer } from '../../../constants/dummyData'

const Setting = ({navigation}) => {
  return (
    <MainWrapper   >
      <StatusBar backgroundColor={colors.appBgColor14}/>
      <Spacer isBasic/>
      <ComponentWrapper>
      <Text style={styles.titletext}>{"Settings"}</Text>
      <Spacer isXSmall/>
      <SettingContainerList data={SettingDataContainer} onPress={(item)=>navigation.navigate(item?.screen)}/>
      </ComponentWrapper>
    </MainWrapper>
  )
}

export default Setting