import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../../../constants";
export const styles= StyleSheet.create({
    camerawrapper:{
        height:height(5.88),
        width:width(39.66),
        borderWidth:1,
        borderColor:colors.appBorder4,
        borderRadius:totalSize(1.55),
        justifyContent:'center',
        alignItems:'center'
    },
 container:{
    width:width(83.25)
 },
 title:{
    fontSize:totalSize(1.7),
    color:colors.appTextColor7
  },
  pickerStyle:{
      height:height(5.15),
      backgroundColor:colors.appBgColor5,
      borderRadius:totalSize(1.55),
      flexDirection:'row',
      justifyContent:'space-between',
      width:width(83.25),
      alignItems:'center',
      paddingLeft:width(3)
  },
  picker:{
      backgroundColor:'red',
  },
  titletxt:{
   fontSize:totalSize(1.7),
   color:colors.appTextColor7
 },
})