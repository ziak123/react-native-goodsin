import { StyleSheet } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import { colors } from "../../../constants";
export const styles= StyleSheet.create({
    head:{
        marginHorizontal:-2
    },
    btn:{
        position:'absolute',
        bottom:totalSize(3.44),
        width:width(90.35),
        alignSelf:'center'
    },
    codeFieldRoot: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width(55.81),
        alignSelf:'center',
      },
      cell: {
        width: width(11.16),
        height: height(4.77),
        fontSize: totalSize(2.55),
        borderRadius: totalSize(1.2),
        backgroundColor:colors.appBgColor5,
       padding:totalSize(.3),
       paddingLeft:totalSize(1.88)
      },
      focusCell: {
        borderColor: colors.appBorder4,
      },
      otptimer:{
        color:colors.appTextColor1,
        fontSize:totalSize(3)
      },
      timerwrapper:{
        alignItems:'center'
      },
      send:{
        color:colors.appTextColor4,
        fontSize:totalSize(1.77)
      }
})