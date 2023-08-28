import { FlatList, Image } from "react-native"
import { RowWrapper, Spacer, Wrapper } from "../../../../components"
import { styles } from "./style"
import { Icon } from "react-native-elements"
import { Text } from "react-native"
import { RadioButton } from 'react-native-paper';
import { useState } from "react"

export const PaymentCard=({data})=>{
    return(
        <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        ItemSeparatorComponent={<Spacer isBasic/>}
        renderItem={({ item, index }) => {
          return (
            <PaymentCartComponent image={item?.img} title={item?.title}/>
          )
        }} />
    )
}
export const PaymentCartComponent= ({image,title})=>{
    const [isChecked, setIsChecked] = useState(false);
    const [checked, setChecked] = useState('first');
    const handleToggleCheck = () => {
      setIsChecked(!isChecked);
    };
    return(
        <RowWrapper style={styles.cardwrapper}>
            <RowWrapper>
                <Spacer isSmall horizontal/>
               <Image source={image}/>
               <Spacer isSmall horizontal/>
               <Text>{title}</Text>
            </RowWrapper>
            <Wrapper style={styles.checkbtn}>
            {isChecked ? (
            <RadioButton
            
            value="Checked" onPress={handleToggleCheck}
            status={ checked === 'first' ? 'checked' : 'unchecked' }
      />
      ) : (
      <RadioButton
      value="Unchecked" onPress={handleToggleCheck} 
      status={ checked === 'second' ? 'checked' : 'unchecked' }
      />)}
            </Wrapper>
        </RowWrapper>
    )
}