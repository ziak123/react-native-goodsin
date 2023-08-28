import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { AuthHeader, ButtonColored, ComponentWrapper, MainHeader, MainWrapper, MediumText, RowWrapper, ScrollView, Spacer, TextInputBordered, Wrapper } from '../../../components'
import { OTPTitleText } from '../../../components/commomComponents'
import { SCREEN, colors } from '../../../constants'
import { styles } from './style'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
  const CELL_COUNT = 4;

const OTP = ({navigation,route}) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
    //DATA PASS FROM ONE COMPONENTS TO ANOTHER COMPONET WITH NAVIGATION
    // const { data } = route?.params // const data = route.params.data
    // const { name, isSignUp } = data // const name = data.name
    const [second, setSecond] = useState(59);
    const [minutes, setMinutes] = useState('00')
    //USE EFFECTS
  //TIMER FOR OTP CODE CONFIRMATION
    const timer = useRef()
    useEffect(() => {
      startTimer()
      //return clearInterval
    }, [])
    const startTimer = () => {
      timer.current = setInterval(() => {
        setSecond((prev)=>{
          if(prev == 0){
            clearInterval(timer.current)
            return 0
          }
          else{
            return prev - 1
          }     
        });
      }, 1000)
    }
  return (
    <MainWrapper>
        <StatusBar backgroundColor={colors.appBgColor14}/>
        <MainHeader  style={styles.head} title={" Enter OTP"}/>
        <Spacer isTiny/>
        <ComponentWrapper>
            <OTPTitleText title={"Enter OTP You Just Received on your given mail"}/>
       <Spacer isXDoubleBase/>
        <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}/>
            <Spacer isXDoubleBase/>
            <Wrapper style={styles.timerwrapper}>
          <Text style={styles.otptimer}>{`${minutes} : ${second < 10 ? `0${second}` : `${second}`}`}</Text>
          <Spacer isBasic/>
          <Text style={styles.send}>{`SEND AGAIN`}</Text>
        </Wrapper>
        </ComponentWrapper>
        <Wrapper style={styles.btn}>
             <ButtonColored text='Verify' onPress={()=>navigation.navigate(SCREEN.createpassword)}  />
             </Wrapper>
    </MainWrapper> 
  )
}

export default OTP