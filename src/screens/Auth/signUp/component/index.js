import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { Spacer, Wrapper } from '../../../../components'
import PhoneInput from "react-native-phone-number-input";
import { styles } from './style';
import { Dropdown } from 'react-native-element-dropdown';
import { Icon } from 'react-native-elements';
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


export const BusinessTypeList = ({caption,title,data})=>{
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return(
<Wrapper>
  <Text style={styles.titletxt}>{title}</Text>
  <Spacer isSmall/>
<Dropdown
          style={[styles.dropdown]}
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
</Wrapper>
  )
}
