import { StyleSheet } from "react-native";
import { totalSize, width } from "react-native-dimension";
export const styles= StyleSheet.create({
    head:{
        marginHorizontal:-2
    },
    btn:{
        position:'absolute',
        bottom:totalSize(4),
        width:width(90.35),
        alignSelf:'center'
    },
    buttn:{
        width:width(90),
        alignSelf:'center'
    },
    title:{
        marginHorizontal:width(.55)
    }
})