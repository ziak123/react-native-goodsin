import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ComponentWrapper, LargeTitle, MediumTitle, RowWrapper, Spacer, Wrapper, XLTitle } from '../../../../components'
import { styles } from './style'
import { Icon } from 'react-native-elements'
import { Button } from 'react-native'
import { colors } from '../../../../constants'

export const UserName = ({ name }) => {
  return (
    <Wrapper>
      <MediumTitle style={styles.name}>{name}</MediumTitle>
    </Wrapper>
  )
}

export const ActivitiesList = ({ data,onPress }) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={data}
      ItemSeparatorComponent={<Spacer isSmall />}
      renderItem={({ item, index }) => {
        return (
          <ActivitiesListComponent lable={item?.item} onPress={()=>onPress(item)} acitivityTime={item?.time} backgroundColor={index % 2 == 0 ? colors.appBgColor4 :colors.appBgColor17} />
        )
      }} />
  )
}
export const ActivitiesListComponent = ({ lable , backgroundColor ,acitivityTime,onPress}) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <ComponentWrapper >
       <TouchableOpacity onPress={toggleExpand}>
        <RowWrapper style={styles.container}>
          <RowWrapper>
            <Wrapper style={[styles.colowrapper , {backgroundColor:backgroundColor}]}></Wrapper>
            <Spacer isSmall horizontal />
            <Text style={styles.txt}>{lable}</Text>
          </RowWrapper>
          <Icon name='chevron-small-right' type='entypo' size={25} />
        </RowWrapper>
        </TouchableOpacity>
        {expanded && (
        <Wrapper style={styles.expand}>
          <Spacer isBasic/>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
             <Icon name='plus' type='feather' size={21} color={colors.iconColor4}/>
            </TouchableOpacity>
            <Spacer isSmall/>
          <RowWrapper style={styles.time}>
          <Wrapper style={styles.logo}></Wrapper>
          <Text>{acitivityTime}</Text>
          </RowWrapper>
        </Wrapper>
      )}
    </ComponentWrapper>
  )
}


