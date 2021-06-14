import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const Splash = ({showSplash}) => {
  useEffect(() => {
    setTimeout(() => {
      showSplash(false);
    }, 3000);
  }, [showSplash]);

  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;
