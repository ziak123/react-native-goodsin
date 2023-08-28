import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../../constants";
export const styles= StyleSheet.create({
    title:{
        color:colors.textColor4,
        fontSize:totalSize(1.77)
    },
    btn:{
        position:'absolute',
        bottom:totalSize(4.55),
        width:width(92.66),
    },
    main:{
        alignItems:'center'
    },
    button:{
    }
})