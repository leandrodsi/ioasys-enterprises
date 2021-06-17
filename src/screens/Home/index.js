import LottieView from 'lottie-react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from 'styled-components/native';
import LogoImage from '../../commons/assets/images/logo_ioasys.png';
import SearchingAnimation from '../../commons/assets/lotties/searching.json';
import Container from '../../commons/components/Container';
import EmptyState from '../../commons/components/EmptyState';
import EnterpriseCard from '../../commons/components/Enterprise';
import { signOut } from '../../commons/services/auth';
import { getAllEnterprises } from '../../commons/services/enterprise';
import store from '../../commons/store';
import {
  AvatarButton,
  AvatarImage,
  ButtonFind,
  ExitButton,
  Header,
  LoadingWrapper,
  Logo,
} from './styled';

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,

  elevation: 8,
};

const Home = ({ navigation: { navigate } }) => {
  const [enterprises, setEnterprises] = useState([]);
  const [loading, setLoading] = useState(false);

  const { colors } = useTheme();

  const { user } = store.getState();

  const expandItem = useCallback(id => {
    setEnterprises(prev =>
      prev.map(enterprise => {
        if (enterprise.id === id) {
          return { ...enterprise, expanded: !enterprise.expanded };
        }
        return { ...enterprise };
      }),
    );
  }, []);

  const handleSignOut = useCallback(() => {
    signOut();
  }, []);

  const handleOpenProfile = useCallback(() => {
    Alert.alert('Open user profile');
  }, []);

  const handleNavigateToSearch = () => {
    navigate('Search');
  };

  const getEnterprises = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getAllEnterprises();

      const data = response.enterprises.map(enterprise => {
        return { ...enterprise, expanded: false };
      });

      setEnterprises(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getEnterprises();
  }, [getEnterprises]);

  const renderLoading = () => (
    <LoadingWrapper>
      <LottieView
        source={SearchingAnimation}
        resizeMode="cover"
        autoPlay
        style={{ width: '50%' }}
      />
    </LoadingWrapper>
  );

  const renderEnterprise = ({ item: enterprise }) => (
    <EnterpriseCard enterprise={enterprise} expand={expandItem} />
  );

  return (
    <Container>
      <Header style={shadow}>
        <AvatarButton onPress={handleOpenProfile}>
          {user?.image ? (
            <AvatarImage />
          ) : (
            <Icon name="user-tie" size={25} color={colors.primary} />
          )}
        </AvatarButton>
        <Logo source={LogoImage} resizeMode="contain" />
        <ExitButton onPress={handleSignOut}>
          <Icon name="sign-out-alt" size={20} color={colors.primary} />
        </ExitButton>
      </Header>

      {loading ? (
        renderLoading()
      ) : (
        <FlatList
          data={enterprises}
          renderItem={renderEnterprise}
          keyExtractor={item => item.id}
          initialNumToRender={5}
          contentContainerStyle={{ paddingTop: 16 }}
          ListEmptyComponent={<EmptyState />}
        />
      )}

      <ButtonFind style={shadow} onPress={handleNavigateToSearch}>
        <Icon name="search" size={25} color={colors.white} />
      </ButtonFind>
    </Container>
  );
};

export default Home;
