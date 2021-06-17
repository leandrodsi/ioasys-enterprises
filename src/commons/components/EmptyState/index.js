import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import EmptyStateImage from '../../assets/icons/emptyState.svg';
import Text from '../Text';

const EmptyState = () => {
  const {
    colors,
    typography: { sizes },
  } = useTheme();

  return (
    <View
      style={{
        width: 300,
        marginTop: 36,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <EmptyStateImage width={150} />
      <Text textSize={sizes.medium} textColor={colors.primary}>
        Nenhuma empresa encontrada
      </Text>
    </View>
  );
};

export default EmptyState;
