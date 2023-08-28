import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../../constants";
export const styles= StyleSheet.create({
    namewrapper:{
        width:width(33)
    },
    searchinput:{
        width:width(90.2),
        borderWidth:1,
        borderColor:colors.borderColor10,
    },
    todayactivity:{
        color:colors.appTextColor3,
        fontSize:totalSize(2.59),
        fontWeight:'500'
    }
})