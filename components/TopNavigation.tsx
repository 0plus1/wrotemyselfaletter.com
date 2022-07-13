import React from 'react';
import { Icon, TopNavigation as KittenTopNavigation, TopNavigationAction } from '@ui-kitten/components';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back'/>
);

const BackAction = ({ navigation }) => (
  <TopNavigationAction icon={BackIcon} onPress={() => navigation.navigate('Home')}/>
);

const TopNavigation = ({ navigation }) => (
  <KittenTopNavigation
    accessoryLeft={<BackAction navigation={navigation} />}
    title='Home'
  />
);

export default TopNavigation;
