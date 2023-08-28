import { StyleSheet } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import { colors } from "../../../../constants";
export const styles= StyleSheet.create({
    headtitle:{
        fontSize:totalSize(2.66),
        color:colors.appTextColor3,
        fontWeight:'800'
    },
    head:{
        marginHorizontal:width(3.66),
        marginVertical:height(1.33)
    },
    cardcontainer:{
        backgroundColor:colors.appBgColor2,
        alignItems:'center',
        borderRadius:totalSize(1.55)
    },
    cardtitle:{
        width:width(84),
        height:height(7.37),
        borderRadius:totalSize(1.55),
        backgroundColor:colors.appBgColor16,
        justifyContent:'center',
        alignItems:'center'
    },
    subcard:{
        width:width(80),
        marginHorizontal:width(5)
    },
    text:{
        color:colors.appTextColor11,
        fontSize:totalSize(1.4),
        fontWeight:'400'
    },
    button:{
        width:width(42.55),
        height:height(3.43),
        borderRadius:totalSize(1.2),
        backgroundColor:colors.appButton4,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'flex-end'
    },
    btntext:{
        color:colors.appTextColor2
    },
    title:{
        color:colors.appTextColor1,
        fontSize:totalSize(1.5),
        fontWeight:'700'
    },
    prodtext:{
        color:colors.appTextColor7
    }
})