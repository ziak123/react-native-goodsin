import { View, Text, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { ComponentWrapper, MainWrapper, Spacer, TextInputSearch } from '../../../components'
import { Card, DetailButton, ProductDescription, ReportHeader } from './component'
import { styles } from './style'
import { colors } from '../../../constants'
import { DeliveryCardDetailList, ProdDescription } from '../../../constants/dummyData'
import FilterModal from '../../../components/modals'
const Report = () => {
    const [showAll, setShowAll] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleToggleShowAll = () => {
        setShowAll(!showAll);
    };


  const handleFilterIconPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
    return (
        <MainWrapper>
            <StatusBar backgroundColor={colors.appBgColor14} />
            <ReportHeader />
            <ComponentWrapper>
                <Spacer isSmall />
                <TextInputSearch containerStyle={styles.searchinput} onPressFilter={handleFilterIconPress} />
                <FilterModal visible={modalVisible} onClose={handleCloseModal} />
                <Spacer isSmall />
                <Card showAll={showAll} category={DeliveryCardDetailList.category} Supplier={DeliveryCardDetailList.supplier} code={DeliveryCardDetailList.batchcode} date={DeliveryCardDetailList.date} slaghter={DeliveryCardDetailList.slaughterPlantNo} processedplantNo={DeliveryCardDetailList.processedPlantNo} country={DeliveryCardDetailList.countryOrigin} temperature={DeliveryCardDetailList.temperature} sign={DeliveryCardDetailList.signofContaminationorDamage} />
                <Spacer isSmall />
                {!showAll &&
                    <DetailButton onToggleShowAll={handleToggleShowAll} />
                }
            </ComponentWrapper>
            {showAll &&
                <ComponentWrapper style={styles.des}>
                    <ProductDescription description={ProdDescription.des} />
                </ComponentWrapper>}
        </MainWrapper>
    )
}

export default Report