import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../constants";

export const styles= StyleSheet.create({
    Acounttext:{
        fontWeight:'700',
        color:colors.appTextColor3,
        fontSize:totalSize(2.77)
    },
    imagewrapper:{
       width:width(27.90), 
       height:height(14.33),
       alignSelf:'center',
       borderRadius:totalSize(8)
    },
    img:{
        width:width(27.90), 
        height:height(14.33),
        borderRadius:totalSize(8)
    },
    camericon:{
        position:'absolute',
        bottom:totalSize(.55),
        right:totalSize(.4),
        backgroundColor:colors.appBgColor4,
        width:width(7.44),
        height:height(3.77),
        borderRadius:totalSize(2),
        alignItems:'center',
        justifyContent:'center'
    },
    headtitlestyle:{
        color:colors.appTextColor1,
        fontSize:totalSize(2.1),
        fontWeight:'500'
    },
    dropdown: {
        height: height(5.15),
        width:width(83.25),
        borderRadius: totalSize(1.59),
        paddingHorizontal: width(4),
        backgroundColor:colors.appBgColor5
      },
      dropdownmain:{
        height: height(8.58),
        width:width(83.25),
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: totalSize(1.44),
       color:colors.appTextColor8
      },
      selectedTextStyle: {
       
      },
      iconStyle: {
        width: width(6),
        height: width(6),
        color:colors.iconColor8
      },
      inputSearchStyle: {
        // height: hei,
        // fontSize: 16,
      },
      titletxt:{
        fontSize:totalSize(1.7),
        color:colors.appTextColor7
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
      otptitle:{
        color:colors.appTextColor8,
        fontWeight:'400',
        fontSize:totalSize(1.77),
        marginHorizontal:width(.55)
      }
})