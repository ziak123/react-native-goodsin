import React from 'react'
import { LargeText, LargeTitle, RowWrapper, RowWrapperBasic, SmallTitle, Wrapper } from '../../../../components'
import { AppleLogo, FaceBookLogo, GoogleLogo } from '../../../../assets/svg'
import { styles } from './style'
import { Image, Text } from 'react-native'
import { appImages } from '../../../../utilities/assets'

export const SocialLoginComponent = () => {
  return (
   <Wrapper style={styles.row}>
    <RowWrapperBasic style={styles.icons}>
       <Image source={appImages.apple} />
       <Image source={appImages.google} />
       <Image source={appImages.facebook} />
    </RowWrapperBasic>
   </Wrapper>
  )
}

export const GotoSignUp=({onPress,caption,next,style})=>{
  return(
    <Wrapper style={styles.row}>
    <RowWrapperBasic style={[styles.textwrapper,style]}>
     <LargeText style={styles.txt} >{caption}</LargeText>
     <SmallTitle style={styles.SIGNUP} onPress={onPress} >{next}</SmallTitle>
    </RowWrapperBasic>
   </Wrapper>
  )
}

