import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
export const styles= StyleSheet.create({
    main:{
        alignItems:'center',
        justifyContent:'center',
       
    },
    secondlogo:{
        position:'absolute',
        bottom:totalSize(7)
    },
    center:{
        justifyContent:'space-between',
        flexDirection:'column',
        alignItems:'center'
    }
})