import { StyleSheet } from "react-native";
import { colors } from "../../../constants";
import { totalSize, width } from "react-native-dimension";
export const styles= StyleSheet.create({
    searchinput:{
        width:width(90.2),
        borderWidth:1,
        borderColor:colors.borderColor10,
    },
    des:{
        backgroundColor:colors.appBgColor2,
        borderRadius:totalSize(1.55)
    }
})