import { StyleSheet } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import { colors } from "../../../../constants";
export const styles= StyleSheet.create({
    row:{
        width:width(90.65),
        height:height(6),
        backgroundColor:'red'
    },
    title:{
        color:colors.appTextColor3,
        fontSize:totalSize(1.69),
        fontWeight:'600',
        marginHorizontal:width(2)
    }
})