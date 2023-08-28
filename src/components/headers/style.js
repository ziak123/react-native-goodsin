import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../constants";
export const styles=  StyleSheet.create({
    authheader:{
        height:height(18),
        width:width(100),
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:colors.appBgColor4,
        borderBottomEndRadius:totalSize(5),
        borderBottomStartRadius: totalSize(5),
    },
    subhead:{
        height: width(30),
        width: width(30),
        backgroundColor:'white',
        borderRadius:10,
        alignSelf:'center',
        top: height(6),
        bottom:0,
        left:0,
        right:0, 
    },
    mainheader:{
height:height(7.77),
flexDirection:'row',
justifyContent:'flex-start',
paddingLeft:width(3)
    },
    iconleft:{
    height:height(3.77),
    width:width(7.44),
    backgroundColor:colors.appBgColor2,
    borderRadius:totalSize(5),
    alignItems:'center',
    justifyContent:'center'
    },
    headertitle:{
        color:colors.appTextColor3,
        fontSize:totalSize(2.65),
        marginHorizontal:width(3.44),
        fontWeight:'700'
    }
})