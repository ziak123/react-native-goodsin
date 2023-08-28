import { StyleSheet } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import { colors } from "../../../../constants";
export const styles=StyleSheet.create({
    detailwrapper:{
        width:width(45),
        flexDirection:'column',
        alignItems:'center',
        alignSelf:'center'
    },
    name:{
        color:colors.appTextColor3,
        fontSize:totalSize(2.11),
        fontWeight:'600'
    },
    email:{
        color:colors.appTextColor8,
        fontSize:totalSize(1.44),
        fontWeight:'600'
    },
    btn:{
        height:height(5.15),
        width:width(42.55),
        backgroundColor:colors.appButton4,
        borderRadius:totalSize(1.99),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    txt:{
        color:colors.appTextColor2,
        fontSize:totalSize(1.88)
    },
    PhoneInput:{
        backgroundColor:colors.appBgColor5,
        borderRadius:totalSize(1.66),
        height:height(5.15),
        width:width(90),
    },
    inputnumber:{
        fontSize:totalSize(1.44),
        color:colors.appTextColor8,
    },
    input:{
        height:height(5),
        paddingBottom:totalSize(.6)
    },
    inputcontainer:{
        backgroundColor:colors.appBgColor5,
 borderRadius:totalSize(1.66),
    },
    titletext:{
        color:colors.appTextColor7,
        marginBottom:width(1.22)
    },
    inputstyle:{
        alignSelf:'center'
    },
    container: {
        backgroundColor: 'white',
        padding: 16,
      },

})

