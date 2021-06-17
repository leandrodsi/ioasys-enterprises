import LottieView from 'lottie-react-native';
import React from 'react';
import SplashAnimation from '../../commons/assets/lotties/loading.json';
import { Wrapper } from './styled';

const Splash = ({ showSplash }) => (
  <Wrapper>
    <LottieView
      source={SplashAnimation}
      resizeMode="contain"
      autoPlay
      loop={false}
      onAnimationFinish={() => showSplash(false)}
    />
  </Wrapper>
);

export default Splash;
