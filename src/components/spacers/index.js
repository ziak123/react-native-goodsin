import React from 'react'
import { View, ViewStyle } from 'react-native'
import { sizes } from '../../constants';

const TempSpacer = ({ style, width, height, }) => {
    return (
        <View style={[{ height: height, width: width }, style]} />
    );
}


export const Spacer = ({ horizontal, height,isXSmall, isXDoubleBase,width, style,isMedium, isBasic, isSmall, isTiny, isXTiny, isDoubleBase, isStatusBarHeigt, isHeaderHeight, isBottomTabBarHeight }) => {
    const tempSize = isXTiny ? sizes.TinyMargin / 2 :
        isTiny ? sizes.TinyMargin :
            isSmall ? sizes.smallMargin :
            isXSmall ? sizes.xsmallMargin :
            isMedium? sizes.mediumMargin:
                isBasic ? sizes.baseMargin :
                    isDoubleBase ? sizes.doubleBaseMargin :
                    isXDoubleBase ? sizes.xdoubleBaseMargin :
                        isStatusBarHeigt ? sizes.statusBarHeight :
                            isHeaderHeight ? sizes.headerHeight :
                                isBottomTabBarHeight ? sizes.tabBarHeight : sizes.baseMargin
    const defaultHeight = !horizontal ? height || tempSize : 0
    const defaultWidth = (horizontal || width) ? width || tempSize : 0
    return (
        <TempSpacer height={defaultHeight} width={defaultWidth} style={style} />
    );
}