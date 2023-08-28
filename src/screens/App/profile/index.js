import { View, Text } from 'react-native'
import React from 'react'
import { ComponentWrapper ,MainHeader, MainWrapper, Spacer, TextInputBordered } from '../../../components'
import { ProfileComp } from '../../../components/commomComponents'
import { CompanyDetail, EditProfileButton, PhoneInputs } from './component'
import { ProfileDetail } from '../../../constants/dummyData'
import { SCREEN } from '../../../constants'

const Profile = ({navigation}) => {
  return (
    <MainWrapper>
      <MainHeader title={"profile"}/>
      <Spacer isSmall/>
      <ComponentWrapper>
       <ProfileComp/>
       <Spacer isBasic/>
       <CompanyDetail name={ProfileDetail.companyname} userEmail={ProfileDetail.email}/>
      <Spacer isBasic/>
       <EditProfileButton onPress={()=>navigation.navigate(SCREEN.editprofile)}/> 
       <Spacer isBasic/>
             <TextInputBordered title="Bussines Type" placeholder={"Abc Company"}/>
             <Spacer isSmall/>
             <TextInputBordered title="Country" placeholder={"Pak"}/>
             <Spacer isSmall/>
      <PhoneInputs title={"Phone Number"}/>
      </ComponentWrapper>
    </MainWrapper>
  )
}

export default Profile