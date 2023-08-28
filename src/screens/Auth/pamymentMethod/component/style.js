import { StyleSheet } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import { colors } from "../../../../constants";
export const styles= StyleSheet.create({
    cardwrapper:{
        height:height(7.29),
        width:width(90.23),
        borderRadius:totalSize(4),
        backgroundColor:colors.appBgColor2,
        alignSelf:'center'
    },
    checkbtn:{
        right:width(2)
    },
})