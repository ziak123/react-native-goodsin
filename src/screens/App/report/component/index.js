import { Icon } from "react-native-elements"
import { ComponentWrapper, RowWrapper, Spacer, Wrapper } from "../../../../components"
import { Button, Text, TouchableOpacity } from "react-native"
import { styles } from "./style"
import { CardTitle } from "../../../../components/commomComponents"
import { useState } from "react"

export const ReportHeader=()=>{
    return(
        <RowWrapper style={styles.head}>
            <Text style={styles.headtitle}>{"Report"}</Text>
            <Icon name="download-outline" type="ionicon" size={30}/>
        </RowWrapper>
    )
}

export const Card =({showAll, onToggleShowAll,code,Supplier,category,date,slaghter,processedplantNo,country,temperature,sign})=>{
    // const [showAll, setShowAll] = useState(false);
    return(
        <Wrapper style={styles.cardcontainer}>
            <Spacer isSmall/>
             <Wrapper style={styles.cardtitle}>
                <CardTitle title={"Check In Delivery"}/>
             </Wrapper>
             <Spacer isBasic/>
             <RowWrapper style={styles.subcard}>
                <Text style={styles.title}>{'Category'}</Text>
             <Text style={styles.text}>{category}</Text>
             </RowWrapper>
             <Spacer isSmall/>
             <RowWrapper style={styles.subcard}>
             <Text style={styles.title}>{'Supplier'}</Text>
             <Text style={styles.text}>{Supplier}</Text>
             </RowWrapper>
             <Spacer isSmall/>
             {showAll && (
                <Wrapper>
             <RowWrapper style={styles.subcard}>
             <Text style={styles.title}>{'Slaghter Plant No'}</Text>
             <Text style={styles.text}>{slaghter}</Text>
             </RowWrapper>
             <Spacer isSmall/>
             <RowWrapper style={styles.subcard}>
             <Text style={styles.title}>{'Processed plant No'}</Text>
             <Text style={styles.text}>{processedplantNo}</Text>
             </RowWrapper>
             <Spacer isSmall/>
             <RowWrapper style={styles.subcard}>
             <Text style={styles.title}>{'countryorigin'}</Text>
             <Text style={styles.text}>{country}</Text>
             </RowWrapper>
             </Wrapper>
             )}
             <Spacer isSmall/>
             <RowWrapper style={styles.subcard}>
             <Text style={styles.title}>{'Batch Code'}</Text>
             <Text style={styles.text}>{code}</Text>
             </RowWrapper>
             <Spacer isSmall/>
             <RowWrapper style={styles.subcard}>
             <Text style={styles.title}>{'Use By Date'}</Text>
             <Text style={styles.text}>{date}</Text>
             </RowWrapper>
             <Spacer isSmall/>
             {showAll && (
                <Wrapper>
             <RowWrapper style={styles.subcard}>
             <Text style={styles.title}>{'Temperature'}</Text>
             <Text style={styles.text}>{temperature}</Text>
             </RowWrapper>
             <Spacer isSmall/>
             <RowWrapper style={styles.subcard}>
             <Text style={styles.title}>{'Sign of Contamination Or Origin'}</Text>
             <Text style={styles.text}>{sign}</Text>
             </RowWrapper>
             </Wrapper>
             )}
             <Spacer isBasic/>
        </Wrapper>
    )
}

export const DetailButton =({onToggleShowAll}) => {
    return(
        <TouchableOpacity  style={styles.button}  onPress={onToggleShowAll}>
         <Text style={styles.btntext}>{"See Full Detail"}</Text>
        </TouchableOpacity>
    )
}

export const ProductDescription=({description})=>{
    return(
        <ComponentWrapper>
            <Spacer isSmall/>
            <Text style={styles.prodtext}>{"Product Description"}</Text>
            <Spacer isBasic/>
            <Text>{description}</Text>
            <Spacer isSmall/>
        </ComponentWrapper>
    )
}