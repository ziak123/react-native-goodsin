import { StyleSheet } from "react-native";
import { colors } from "../../../constants";
import { totalSize, width } from "react-native-dimension";
export const styles= StyleSheet.create({
    text:{
        color:colors.appTextColor3,
        fontSize:totalSize(2.88),
        fontWeight:'500',
        marginHorizontal:width(.66)
    },
    btn:{
        position:'absolute',
        bottom:totalSize(4.55),
        width:width(92.66),
    },
})