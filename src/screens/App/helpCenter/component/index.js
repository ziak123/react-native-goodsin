import {  FlatList, Text } from "react-native"
import {
    LayoutAnimation,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    UIManager,
    View
} from 'react-native';
import { ComponentWrapper, RowWrapper, Spacer, Wrapper } from "../../../../components"
import { Icon } from "react-native-elements"
import { styles } from "./style"
import { colors } from "../../../../constants"
import { TouchableOpacityBase } from "react-native"
import { useState } from "react"
import { FaqCardData } from "../../../../constants/dummyData";

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
export const CardComponent= ({data})=>{
    return (
        <FlatList
                showsHorizontalScrollIndicator={false}
                data={data}
                ItemSeparatorComponent={<Spacer isSmall />}
                renderItem={({ item, index }) => {
                  return (
                    <Item title={item?.title} description={item?.description} />
                  )
                }} />
    );
}

    function Item({ i,title,description }) {
    const [open, setopen] = useState(false);
    const onPress = () => {
        LayoutAnimation.easeInEaseOut();
        setopen(!open);
    };
    return(
        <TouchableOpacity  onPress={onPress} style={styles.card} activeOpacity={1}>
            {/* <Spacer isBasic/> */}
        <RowWrapper style={styles.subcard} >
            <Text style={styles.title} >{title} {i+1}</Text>
            {open ? 
            <Wrapper style={styles.iconwrapper}>
            <Icon name="arrow-down" type="simple-line-icon" size={13} color={colors.iconColor21}/>
            </Wrapper>
            :
            <Wrapper style={styles.iconwrapper}>
            <Icon name="arrow-up" type="simple-line-icon" size={13} color={colors.iconColor21}/>
            </Wrapper>
} 
        </RowWrapper>
         {open ?   
         <ComponentWrapper>
            <Wrapper style={styles.line}></Wrapper>
            <Spacer isSmall/>
             <Text >{description}</Text>
             <Spacer isBasic/>
             </ComponentWrapper>
             : null
        }
          </TouchableOpacity>
    )
}