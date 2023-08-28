import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ComponentWrapper, MainHeader, MainWrapper, Spacer, TextInputBordered, Wrapper } from '../../../components'
import { styles } from './style'
import { CardTitle, DropDownComponent } from '../../../components/commomComponents'
import { ActivitiesDataContainer, Data } from '../../../constants/dummyData'
import { height } from 'react-native-dimension'
import { AttachFileComponent, CountryPickerComponent } from './component'


const CheckInDelivery = () => {
    return (
        <MainWrapper>
            <MainHeader title={"Today's Activeities"} />
            <Spacer isTiny/>
            <Wrapper style={styles.container}>
                <Wrapper style={styles.firstcontainer} >
                    <Spacer isBasic />
                    <CardTitle title={"Check In Delivery"} />
                    <Spacer isBasic />
                    <Text style={styles.content}>{"02.08.2023 09:00"}</Text>
                </Wrapper>
                <Spacer isBasic />
                <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false} >
                    <Wrapper style={styles.subwrapper}>
                        <DropDownComponent data={Data} title={"Select Catrgory"} caption={"Select Category"} />
                        <Spacer isBasic />
                        <DropDownComponent data={Data} title={"Select Supplier"} caption={"Select Supplier"} />
                        <Spacer isBasic />
                        <DropDownComponent data={Data} title={"Select Slaughter Plant No:"} caption={"Description"} />
                        <Spacer isBasic />
                        <DropDownComponent data={Data} title={"Select Processed Plant No:"} caption={"Description"} />
                        <Spacer isBasic />
                        <CountryPickerComponent />
                        <Spacer isSmall />
                        <TextInputBordered containerStyle={styles.button} title="Batch Code" placeholder={"Batch Code"} />
                        <Spacer isBasic />
                        <TextInputBordered containerStyle={styles.button} title="Use By Date" placeholder={"Description"} iconName="calendar" iconType="feather" />
                        <Spacer isSmall />
                        <TextInputBordered containerStyle={styles.button} title="Product Temperature" placeholder={"Description"} iconName="temperature-celsius" iconType="material-community" iconSize={20} />
                        <Spacer isSmall />
                        <DropDownComponent data={Data} title={"Sign Of Contamination Or Damage"} caption={"Select Supplier"} />
                        <Spacer isBasic />
                        <TextInputBordered containerStyle={styles.button} title="Note" placeholder={"Additional Note"} />
                        <Spacer isBasic />
                        <AttachFileComponent />
                    </Wrapper>
                </ScrollView>
                <Spacer isBasic />
            </Wrapper>
        </MainWrapper>
    )
}

export default CheckInDelivery