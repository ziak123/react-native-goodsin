import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ComponentWrapper, MainWrapper, Spacer, TextInputSearch } from '../../../components'
import {ActivitiesList, UserName} from './components'
import { styles } from './style'
import { ActivitiesDataContainer } from '../../../constants/dummyData'


const Home = ({navigation}) => {
    
      
    return (
       <MainWrapper >
        <Spacer isBasic/>
        <ComponentWrapper style={styles.namewrapper}>
        <UserName name={"Welcome John"}/>
        </ComponentWrapper>
        <ComponentWrapper>
        <Spacer isSmall />
        <TextInputSearch  containerStyle={styles.searchinput} />
        <Spacer isSmall/>
        <Text style={styles.todayactivity}>{"Today's Activities"}</Text>
        </ComponentWrapper>
        <Spacer isBasic/>
        <ActivitiesList data={ActivitiesDataContainer} onPress={(item)=>navigation.navigate(item?.SCREEN)} />
       </MainWrapper>
    )
}

export default Home