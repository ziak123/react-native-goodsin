import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../../constants";
export const styles= StyleSheet.create({
    checkwrapper:{
     width:width(92),
     marginHorizontal: width(0),
    },
    componenewrapper:{
        width:width(100)
    },
    forgot:{
        color:colors.appBgColor4,
        fontWeight:'700',
        right:width(.66),
        fontFamily:'Poppins'
    },
    or:{
        fontSize:totalSize(2.44),
        color:colors.appTextColor3,
        fontWeight:'600',
        alignSelf:'center',
    }
})