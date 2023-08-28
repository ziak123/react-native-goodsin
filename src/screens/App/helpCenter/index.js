import { View, Text, useWindowDimensions } from 'react-native'
import React ,{ useState }from 'react'
import { ComponentWrapper, MainHeader, MainWrapper, RowWrapper, Spacer, TextInputBordered } from '../../../components'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { CardComponent, FaqDetailCard } from './component';
import { FaqCardData, RoutTitle } from '../../../constants/dummyData';
import { colors } from '../../../constants';
import { styles } from './style';
import { Icon } from 'react-native-elements';

const FirstRoute = () => (
    <ComponentWrapper  >
        <Spacer isBasic/>
        <CardComponent data={FaqCardData}/>
    </ComponentWrapper>
  );
  
  const SecondRoute = () => (
    <ComponentWrapper>
        <Spacer isBasic/>
        <RowWrapper style={styles.row}>
   <Icon name='phone' type='feather' color={colors.iconColor23} size={22} />
   <Spacer isBasic horizontal/>
   <Text style={styles.text}>{"Phone Number"}</Text>
   </RowWrapper >
   <Spacer isBasic/>
   <RowWrapper style={styles.row}>
   <Icon name='web' type='material-community' color={colors.iconColor23} size={24}/>
   <Spacer isBasic horizontal/>
   <Text style={styles.text}>{"Phone Number"}</Text>
   </RowWrapper>
</ComponentWrapper>
  );
const HelpCeter = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState(RoutTitle);
  
    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
    });
    const renderTabBar = props => (
        <TabBar
              {...props}
              activeColor={colors.appTextColor3}
              inactiveColor={colors.appTextColor1}
              indicatorStyle={styles.ind}
              style={styles.tabbar}
        />
      );
  
    return (
        <MainWrapper>
        <MainHeader title={"Help Center"}/>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      </MainWrapper>
    );
}

export default HelpCeter