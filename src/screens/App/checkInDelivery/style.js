import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../../constants";
export const styles= StyleSheet.create({
    container:{
        backgroundColor:colors.appBgColor2,
        borderRadius:totalSize(1.66),
        width:width(90.69),
        alignSelf:'center',
        paddingLeft:width(1.88),
        height:height(89),
    },
    firstcontainer:{
        alignSelf:'center',
        width:width(84.66),
    },
    content:{
        color:colors.appTextColor8
    },
    button:{
        width:width(83.25),
    },
    subwrapper:{
        alignSelf:'center',
    },
    ScrollView:{
        height:height(84.44),
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
    }
})