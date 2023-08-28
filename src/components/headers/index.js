import React from 'react'
import { RowWrapper, Wrapper } from '../wrappers';
import { styles } from './style';
import { Image, Text, TouchableOpacity } from 'react-native';
import { appImages } from '../../utilities/assets';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { goBack } from '../../navigation/rootNavigation';

export const AuthHeader = () => {
    return (
        <Wrapper style={styles.authheader}>
            <Wrapper style={styles.subhead}>
                <Image source={appImages.logo1} resizeMode='contain' style={{ height: styles.subhead.height, width: styles.subhead.width }} />
            </Wrapper>
        </Wrapper>
    )
}

export const MainHeader = ({ title,style }) => {
    const navigation = useNavigation();
    return (
        <RowWrapper style={styles.mainheader}>
            <TouchableOpacity style={[styles.iconleft,style]} onPress={() => navigation.goBack()} >
                <Icon name='chevron-small-left' type='entypo' size={24}/>
            </TouchableOpacity>
            <Text style={styles.headertitle} >{title}</Text>
        </RowWrapper>
    )
}
