import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../../../constants";
export const styles= StyleSheet.create({
    PhoneInput:{
        backgroundColor:colors.appBgColor5,
        borderRadius:totalSize(1.66),
        height:height(5.15),
        width:width(90),
    },
    inputnumber:{
        fontSize:totalSize(1.44),
        color:colors.appTextColor8,
    },
    input:{
        height:height(5),
        paddingBottom:totalSize(.6)
    },
    inputcontainer:{
        backgroundColor:colors.appBgColor5,
 borderRadius:totalSize(1.66),
    },
    titletext:{
        color:colors.appTextColor7,
        marginBottom:width(1.22)
    },
    inputstyle:{
        alignSelf:'center'
    },

    container: {
        backgroundColor: 'white',
        padding: 16,
      },
      dropdown: {
        height: height(5.15),
        borderRadius: totalSize(1.59),
        paddingHorizontal: width(4),
        backgroundColor:colors.appBgColor5
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: totalSize(1.77),
       color:colors.appTextColor8
      },
      selectedTextStyle: {
       
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
      titletxt:{
        fontSize:totalSize(1.7),
        color:colors.appTextColor7
      }
})