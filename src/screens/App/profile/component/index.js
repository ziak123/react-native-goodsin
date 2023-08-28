import { Text, TouchableOpacity } from "react-native"
import { Spacer, Wrapper } from "../../../../components"
import { styles } from "./style"
import PhoneInput from "react-native-phone-number-input"
import { useRef, useState } from "react"

export const CompanyDetail= ({name,userEmail})=>{
    return(
        <Wrapper style={styles.detailwrapper}>
       <Text style={styles.name}>{name}</Text>
       <Spacer isTiny/>
       <Text style={styles.email}>{userEmail}</Text>
        </Wrapper>
    )
}

export const EditProfileButton=({onPress})=>{
    return(
     <TouchableOpacity style={styles.btn} onPress={onPress}>
     <Text style={styles.txt}>{"Edit Profile"}</Text>
     </TouchableOpacity>
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