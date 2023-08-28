import { StyleSheet } from "react-native";
import { colors } from "../../../constants";
import { height, width } from "react-native-dimension";
export const styles = StyleSheet.create({
    tabbar:{
        backgroundColor:colors.appBgColor14
    },
    ind:{
        backgroundColor:colors.appBgColor3,
        height:height(.099),
        width:width(45.11)

    },
    row:{
        justifyContent:'flex-start',
    },
    text:{
        color:colors.appTextColor3
    }
})