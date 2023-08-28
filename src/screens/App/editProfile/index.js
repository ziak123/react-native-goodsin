import { View, Text } from 'react-native'
import React from 'react'
import { ComponentWrapper, MainHeader, MainWrapper, Spacer, TextInputBordered } from '../../../components'
import { DropDownComponent, PhoneInputs, ProfileComponent } from '../../../components/commomComponents'
import { Data } from '../../../constants/dummyData'
import { styles } from './style'


const EditProfile = ({navigation}) => {
  return (
    <MainWrapper>
      <MainHeader title={"Edit profile"}/>
      <Spacer isSmall/>
      <ComponentWrapper>
       <ProfileComponent/>
       <Spacer isBasic/>
             <TextInputBordered title="Company Name" placeholder={"Abc Company"}/>
             <Spacer isSmall/>
             <TextInputBordered title="Email" placeholder={"Pak"}/>
             <Spacer isSmall/>
                        <DropDownComponent style={styles.dropdown} data={Data} title={" Bussines Type"} caption={"Select One"} />
                        <Spacer isSmall />
                        <DropDownComponent style={styles.dropdown} data={Data} title={" Country"} caption={"Pak"} />
                        <Spacer isSmall />
      <PhoneInputs title={" Phone Number"}/>
      </ComponentWrapper>
    </MainWrapper>
  )
}

export default EditProfile