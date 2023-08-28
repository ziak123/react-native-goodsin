import React from 'react';
import { height, totalSize, width } from 'react-native-dimension';
import { PrimaryCheckBox, RowWrapper, Spacer, Wrapper, } from '..';
import { View, TextInput, Modal, Button, StyleSheet, Text } from 'react-native';
import { styles } from './style';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

// export const PrimaryModal = ({ isVisible, toggleModal, swipeDisabled, onPressCancelDelivery, onPressKeepDelivery, onPressClose }) => {
//     return (
//         <Modal
//             animationType="slide"
//             isVisible={isVisible}
//             swipeDirection={swipeDisabled ? null : 'down'}
//             onSwipeComplete={toggleModal}
//             style={styles.modal}
//             onBackdropPress={toggleModal}
//             backdropOpacity={0.3}
//         >
//             <Wrapper>

//             </Wrapper>
//         </Modal>
//     );
// };



// const styles = StyleSheet.create({

//     modal: {
//         marginHorizontal: width(10),
//         borderWidth: 0,
//     },



// })





const FilterModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <Wrapper style={styles.modalContainer}>
        <Wrapper style={styles.modalContent}>
          <RowWrapper>
            <Text style={styles.filter}>{"Filter"}</Text>
            <TouchableOpacity onPress={onClose}  style={styles.close}>
            <Icon name='close' type='antdesign'/>
        </TouchableOpacity>
            </RowWrapper>
            <Spacer isBasic/>
        <PrimaryCheckBox textStyle={styles.text} text={"Category"}/>
        <Spacer isBasic/>
        <PrimaryCheckBox textStyle={styles.text} text={"Batch Code"}/>
        <Spacer isBasic/>
        <PrimaryCheckBox textStyle={styles.text} text={"Time"}/>
        </Wrapper>
      </Wrapper>
    </Modal>
  );
};

export default FilterModal;
