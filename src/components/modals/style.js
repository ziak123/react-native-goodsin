import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import { height, totalSize, width } from "react-native-dimension";
export const styles= StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        backgroundColor: colors.appBgColor15,
        padding: 20,
        borderRadius: totalSize(1.55),
        width: width(70),
        height:height(25)
      },
      filter:{
        color:colors.appTextColor1,
        fontSize:totalSize(2.33),
        fontWeight:'900'
      },
      text:{
         fontSize:totalSize(1.55),
         fontWeight:'500',
         color:colors.appTextColor1
      },
      // close:{
      //   position:'absolute',
      //   bottom:totalSize(5),
      //   alignSelf:'center'
      // }
})