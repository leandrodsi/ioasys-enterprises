import { Linking } from 'react-native';

export const openLink = async link => {
  const supported = await Linking.canOpenURL(link);

  if (supported) {
    Linking.openURL(link);
  }
};
