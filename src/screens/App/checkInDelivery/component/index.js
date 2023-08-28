import { Text, TouchableOpacity } from "react-native"
import { RowWrapper, Spacer, Wrapper } from "../../../../components"
import { styles } from "./style"
import { Icon } from "react-native-elements"
import { colors } from "../../../../constants"
import CountryPicker from 'rn-country-picker'
import { useState } from "react"

export const AttachFileComponent =()=>{
    return(
        <Wrapper>
          <Text style={styles.title}>{"Attach A Photo/File"}</Text>
          <Spacer isSmall/>
        <RowWrapper style={styles.container}>
          <TouchableOpacity style={styles.camerawrapper}>
          <Icon name="camera" type="evilicon" color={colors.iconColor4} size={40}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.camerawrapper}>
          <Icon name="link" type="feather" color={colors.iconColor4} size={25}/>
          </TouchableOpacity>
        </RowWrapper>
        </Wrapper>
    )
}

export const CountryPickerComponent= ()=>{
  const [countryCode, setCountryCode] = useState("91");

	const selectedValue = () => {
		setCountryCode(value);
    }
  return(
    <Wrapper>
      <Text style={styles.titletxt}>{"Select Country Of Origin"}</Text>
      <Spacer isSmall/>
    <CountryPicker
				disable={false}
				animationType={"slide"}
				language="en"
				containerStyle={styles.pickerStyle}
				pickerTitleStyle={styles.pickerTitleStyle}
				// dropDownImage={require("./res/ic_drop_down.png")}
				selectedCountryTextStyle={styles.selectedCountryTextStyle}
				countryNameTextStyle={styles.countryNameTextStyle}
				pickerTitle={"Country Picker"}
				searchBarPlaceHolder={"Search......"}
				hideCountryFlag={false}
				hideCountryCode={true}
				searchBarStyle={styles.searchBarStyle}
				// backButtonImage={require("./res/ic_back_black.png")}
				// searchButtonImage={require("./res/ic_search.png")}
				countryCode={"1"}
				selectedValue={selectedValue}
			/>
      </Wrapper>
  )
}