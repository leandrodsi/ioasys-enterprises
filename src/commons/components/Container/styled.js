import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  padding: ${({ paddingWrapper }) => paddingWrapper || 0}px;

  align-items: center;
  justify-content: space-between;
  background-color: #f2f2fe;
`;
