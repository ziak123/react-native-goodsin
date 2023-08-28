import { StyleSheet } from "react-native";
import { colors } from "../../../constants";
import { height, totalSize, width } from "react-native-dimension";
export const styles = StyleSheet.create({
    comp:{
      backgroundColor:colors.appBgColor2 ,
      borderRadius:totalSize(1.55) 
    },
    button:{
        width:width(83.25),
    },
    title:{
      marginHorizontal:width(.88)
    },
    btn:{
    height:height(6.99),
        width:width(13.95),
        backgroundColor:colors.appButton13,
        borderRadius:totalSize(4),
       justifyContent:'center',
       alignItems:'center',
       alignSelf:'center'
    }
})