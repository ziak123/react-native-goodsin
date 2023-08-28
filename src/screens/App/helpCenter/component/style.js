import { StyleSheet } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import { colors } from "../../../../constants";
export const styles= StyleSheet.create({
    card:{
        
        width:width(90.58),
        backgroundColor:colors.appBgColor2,
        borderRadius:totalSize(1.55),
        borderWidth:colors.appBorder10,
        borderWidth:totalSize(.02),
        overflow: 'hidden',
    },
    title:{
        color:colors.appTextColor21,
        marginHorizontal:width(2.55)
    },
    iconwrapper:{
        right:width(2.55)
    },
    expand:{
        height:height(20.48),
        width:width(90.58),
        backgroundColor:colors.appBgColor2,
        borderBottomLeftRadius:totalSize(1.55),
        borderBottomRightRadius:totalSize(1.55),
        alignSelf:'center',
        borderWidth:colors.appBorder10,
        borderWidth:totalSize(.03)

    },
    container:{
       height:height(30),
        borderWidth: 1,
        paddingHorizontal: 20,
        overflow: 'hidden',
        paddingVertical: 10,
        marginBottom: 5,
    },
    subcard:{
        height:height(5.61), 
    },
    line:{
        backgroundColor:'red',
        width:width(81.38),
        height:height(.22),
        backgroundColor:colors.appBgColor22
    }
})