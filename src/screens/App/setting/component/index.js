import { FlatList, Image, Text, TouchableOpacity } from "react-native"
import { RowWrapper, Spacer, Wrapper } from "../../../../components"
import { Icon } from "react-native-elements"
import { styles } from "./style"
import { colors } from "../../../../constants"

export const SettingContainerList = ({ data, onPress }) => {
    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            data={data}
            ItemSeparatorComponent={<Spacer isBasic />}
            renderItem={({ item, index }) => {
                return (
                    <ContainerComponent img={item.image} title={item.item} onPress={()=>onPress(item)}  name={item.iconName} type={item.iconType}/>
                )
            }} />
    )
}

export const ContainerComponent = ({ title,img,name,type,onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <RowWrapper>
            <RowWrapper >
                <Image source={img}/>
                <Icon
                    name={name}
                    type={type}
                    size={title == 'Profile' ?30 :25}
                    color={colors.iconColor3}
                />
                <Text style={styles.title}>{title}</Text>
            </RowWrapper>
            {title == "Log Out" ? null :
            <Icon name="chevron-with-circle-right" type="entypo" color={colors.iconColor20}/>
    }
        </RowWrapper>
        </TouchableOpacity>
    )
}