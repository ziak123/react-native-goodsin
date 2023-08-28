import React, { useRef, useState } from 'react'
import { LargeText, RegularText } from '../text'
import { styles } from './style'
import { ComponentWrapper, Wrapper } from '../wrappers'
import { Image, Text } from 'react-native'
import { appImages } from '../../utilities/assets'
import { Icon } from 'react-native-elements'
import { colors } from '../../constants'
import { TouchableOpacity } from 'react-native'
import { Spacer } from '../spacers'
import { Dropdown } from 'react-native-element-dropdown'
import PhoneInput from 'react-native-phone-number-input'

export const LogText=({caption})=>{
    return(
        <LargeText style={styles.Acounttext}>{caption}</LargeText>
    )
}

export const ProfileComponent = ()=>{
    return(
        <Wrapper style={styles.imagewrapper}>
     <Image source={appImages.profile} style={styles.img}/>
     <TouchableOpacity style={styles.camericon}>
     <Icon name='camera' type='feather' size={15} color={colors.appBgColor2}/>
     </TouchableOpacity>
        </Wrapper>
    )
}

export const CardTitle =({title,style})=>{
    return(
        <Wrapper>
            <Text style={[styles.headtitlestyle,style]} >{title}</Text>
        </Wrapper>
    )
}

export const DropDownComponent = ({caption,title,data,style})=>{
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    return(
  <Wrapper style={styles.dropdownmain}>
    <RegularText style={styles.titletxt}>{title }</RegularText>
    <Spacer isTiny/>
    <Spacer isTiny/>
  <Dropdown
            style={[styles.dropdown,style]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder={caption}
            // searchPlaceholder="Search..."
            value={value}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}          
          />
          <Spacer isTiny/>
  </Wrapper>
    )
  }

  export const ProfileComp = ()=>{
    return(
        <Wrapper style={styles.imagewrapper}>
     <Image source={appImages.profile} style={styles.img}/>
     <TouchableOpacity style={styles.camericon}>
     <Icon name='camera' type='feather' size={15} color={colors.appBgColor2}/>
     </TouchableOpacity>
        </Wrapper>
    )
}

export const PhoneInputs = ({title}) => {
  const phoneInput = useRef(null);
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
return (
  <Wrapper style={styles.inputstyle}>
      <Text style={styles.titletext}>{title}</Text>
      <Spacer isTiny/>
      <PhoneInput
          ref={phoneInput}
          containerStyle={styles.PhoneInput}
          defaultValue={value}
          codeTextStyle={styles.inputnumber}
          textInputStyle={styles.input}
         textContainerStyle={styles.inputcontainer}
        />
  </Wrapper>
)
}

export const OTPTitleText=({title})=>{
  return(
    <Text style={styles.otptitle}>{title}</Text>
  )
}