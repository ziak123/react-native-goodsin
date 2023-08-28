import React from 'react'
import { MainWrapper, Wrapper} from '../../../components/wrappers'
import { Logo } from '../../../assets/svg'
import { styles } from './style'
import { Image } from 'react-native'
import { appImages } from '../../../utilities/assets'

const Splash = () => {
    return (
        <MainWrapper style={styles.main} > 
            <Wrapper >
          <Image source={appImages.splash}/>
            </Wrapper>
            <Wrapper style={styles.secondlogo}>
          <Image source={appImages.splash1}/>
          </Wrapper>
        </MainWrapper>
    )
}

export default Splash