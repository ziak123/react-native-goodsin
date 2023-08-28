import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../../../constants";
export const styles= StyleSheet.create({
row:{
   alignItems:'center'
},
icons:{
    width:width(51.16),
    justifyContent:'space-between'
},
textwrapper:{
    width:width(55),
},SIGNUP:{
    color:colors.appBgColor4,
    fontSize:totalSize(1.89)
},
txt:{
    fontSize:totalSize(1.88)
}
})