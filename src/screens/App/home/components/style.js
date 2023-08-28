import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../../../constants";
export const styles= StyleSheet.create({
    name:{
        fontWeight:'700'
    },
    colowrapper:{
        width:width(2.32),
        height:height(5.36),
        backgroundColor:colors.appBgColor4,
        borderRadius:totalSize(1.2)
    },
    container:{
        width:width(90),
        height:height(7.93),
        paddingHorizontal: width(3),
        borderRadius: totalSize(1.55),
        backgroundColor:colors.bgColor3,
    },
    txt:{
        color:colors.appTextColor1,
        fontSize:totalSize(1.8),
        fontWeight:'600'
    },
    main:{
        width:width(90),
        height:height(7.93),
    borderRadius:totalSize(1.44),
    },
    expand:{
     height:height(15.22),
     width:width(90),
     backgroundColor:colors.appBgColor2,
     bottom:totalSize(.44),
     borderBottomLeftRadius:totalSize(1.55),
     borderBottomRightRadius:totalSize(1.55),
     marginHorizontal:width(1.33),
     alignItems:'center'
    },
    btn:{
        height:height(4.44),
        width:width(8.77),
        backgroundColor:colors.appButton13,
        borderRadius:totalSize(7),
       justifyContent:'center',
       alignItems:'center',
       alignSelf:'center'
    },
    time:{
       height:height(4.82),
       width:width(81.39),
       borderRadius:totalSize(1.55),
       backgroundColor:colors.appBgColor13,
       justifyContent:'flex-start'
    },
    logo:{
        height:height(2.57),
        width:width(5),
        backgroundColor:colors.appBgColor4,
        borderRadius:totalSize(5),
        marginHorizontal:width(2.66)
    }
})