import { StyleSheet } from "react-native";
import { height, width, totalSize } from 'react-native-dimension'
import { colors, sizes } from "../../constants";
export const styles = StyleSheet.create({
    textInputBorderedContainer: {
        // borderWidth: 1,
        height: height(5.15),
        borderRadius: totalSize(1.5),
        borderColor: colors.appBgColor5,
        backgroundColor: colors.appBgColor5,
        // paddingTop:3
    },
    textInputSearch: {
        borderRadius: 0,
        borderWidth: 0,
        backgroundColor: colors.appBgColor2,
        borderRadius: totalSize(1.44),
        height: height(5.15),
        // paddingTop:6
    }

})