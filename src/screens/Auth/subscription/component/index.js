import { FlatList, Text } from "react-native"
import { ComponentWrapper, PrimaryCheckBox, RowWrapper, Spacer, Wrapper } from "../../../../components"
import { styles } from "./style"

export const Card =({data})=>{
    return(
        <FlatList
      showsHorizontalScrollIndicator={false}
      data={data}
      ItemSeparatorComponent={<Spacer isBasic/>}
      renderItem={({ item, index }) => {
        return (
          <CardComponent money={item?.money} trial={item?.trial} />
        )
      }} />
    )
}

export const CardComponent=({money,trial})=>{
return(
    <RowWrapper style={styles.card}>
        <Wrapper>
            <PrimaryCheckBox />
        </Wrapper>
        <Wrapper style={styles.inner}>
            <Text style={styles.money}>{money}</Text>
           <Text style={styles.trial}>{trial}</Text>
        </Wrapper>
    </RowWrapper>
)
}