import { StyleSheet } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import { colors } from "../../../../constants";
export const styles= StyleSheet.create({
    card:{
        height:height(9.01),
        width:width(90.23),
        borderRadius:totalSize(1.55),
        borderWidth:1,
        borderColor:colors.borderColor8,
        alignItems:'center',
        justifyContent:'flex-start',
        paddingLeft:width(5),
    },
    inner:{
        flexDirection:'column',
    },
    money:{
        color:colors.appTextColor1,
        fontSize:totalSize(1.77)
    },
    trial:{
        color:colors.appTextColor1,
        fontSize:totalSize(1.5)
    }
})