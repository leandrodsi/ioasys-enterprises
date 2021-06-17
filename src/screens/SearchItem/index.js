import LottieView from 'lottie-react-native';
import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from 'styled-components/native';
import LogoImage from '../../commons/assets/images/logo_ioasys.png';
import SearchingAnimation from '../../commons/assets/lotties/searching.json';
import Container from '../../commons/components/Container';
import EmptyState from '../../commons/components/EmptyState';
import EnterpriseCard from '../../commons/components/Enterprise';
import { signOut } from '../../commons/services/auth';
import {
  getEnterpriseById,
  getEnterpriseByTypeAndName,
} from '../../commons/services/enterprise';
import store from '../../commons/store';
import {
  AvatarImage,
  ButtonSearch,
  CustomText,
  ExitButton,
  GoBackButton,
  Header,
  InputField,
  LoadingWrapper,
  Logo,
  SearchFiltersContainer,
  SearchWrapper,
  TabFilter,
  TabFilterContainer,
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

const findBy = {
  ID: 'ID',
  TYPE: 'TYPE',
};

const SearchItem = ({ navigation: { goBack } }) => {
  const [enterprises, setEnterprises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [typeSearch, setTypeSearch] = useState(findBy.ID);
  const [filterId, setFilterId] = useState();
  const [filterName, setFilterName] = useState();

  const {
    colors,
    typography: { sizes },
  } = useTheme();

  const isFindById = typeSearch === findBy.ID;
  const placeholderId = isFindById
    ? 'Enter an enterprise ID'
    : 'Enter a type ID';

  const { user } = store.getState();
  console.log(user);

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

  const setTypeAndName = useCallback(() => {
    return filterId && filterName
      ? { enterprise_types: filterId, name: filterName }
      : filterId
      ? { enterprise_types: filterId }
      : { name: filterName };
  }, [filterId, filterName]);

  // const searchEnterprise = useCallback(async () => {
  //   try {
  //     setLoading(true);

  //     const getData = isFindById
  //       ? getEnterpriseById
  //       : getEnterpriseByTypeAndName;
  //     const params = isFindById ? filterId : setTypeAndName();

  //     const response = await getData(params);

  //     console.log(response.enterprise);

  //     const data = isFindById
  //       ? [
  //           {
  //             ...response.enterprise,
  //             expanded: false,
  //           },
  //         ]
  //       : response.enterprises.map(enterprise => {
  //           return { ...enterprise, expanded: false };
  //         });

  //     setEnterprises(data);
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [filterId, isFindById, setTypeAndName]);

  const searchEnterpriseById = useCallback(async () => {
    try {
      setLoading(true);
      setEnterprises([]);

      const response = await getEnterpriseById(filterId);

      console.log(response.enterprise);

      const data = [
        {
          ...response.enterprise,
          expanded: false,
        },
      ];

      setEnterprises(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [filterId]);

  const searchEnterpriseByTypeAndName = useCallback(async () => {
    try {
      setLoading(true);
      setEnterprises([]);

      const response = await getEnterpriseByTypeAndName(setTypeAndName());

      const data = response.enterprises.map(enterprise => {
        return { ...enterprise, expanded: false };
      });

      setEnterprises(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [setTypeAndName]);

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

  const handleSearch = isFindById
    ? searchEnterpriseById
    : searchEnterpriseByTypeAndName;

  return (
    <Container>
      <Header style={shadow}>
        <GoBackButton onPress={goBack}>
          {user?.image ? (
            <AvatarImage />
          ) : (
            <Icon name="arrow-left" size={25} color={colors.primary} />
          )}
        </GoBackButton>
        <Logo source={LogoImage} resizeMode="contain" />
        <ExitButton onPress={handleSignOut}>
          <Icon name="sign-out-alt" size={20} color={colors.primary} />
        </ExitButton>
      </Header>

      <SearchWrapper>
        <TabFilterContainer>
          <TabFilter
            selected={isFindById}
            $left
            onPress={() => setTypeSearch(findBy.ID)}>
            <CustomText
              textSize={sizes.medium}
              textColor={isFindById ? colors.white : colors.primary}>
              By ID
            </CustomText>
          </TabFilter>
          <TabFilter
            selected={!isFindById}
            $right
            onPress={() => setTypeSearch(findBy.TYPE)}>
            <CustomText
              textSize={sizes.medium}
              textColor={!isFindById ? colors.white : colors.primary}>
              By type and name
            </CustomText>
          </TabFilter>
        </TabFilterContainer>

        <SearchFiltersContainer>
          <InputField
            placeholder={placeholderId}
            value={filterId}
            onChangeText={setFilterId}
            placeholderTextColor={colors.gray}
            rules={[() => !!filterId || 'Enter an ID']}
            keyboardType="numeric"
            returnKeyType="next"
            blurOnSubmit={false}
            autoCapitalize="none"
          />
          {!isFindById && (
            <InputField
              placeholder="Enter an enterprise name"
              value={filterName}
              onChangeText={setFilterName}
              placeholderTextColor={colors.gray}
              rules={[() => !!filterName || 'Enter an enterprise name']}
              keyboardType="default"
              returnKeyType="send"
              blurOnSubmit={false}
              autoCapitalize="none"
            />
          )}
          <ButtonSearch
            disabled={isFindById ? !filterId : !filterId && !filterName}
            onPress={handleSearch}>
            <CustomText textSize={sizes.large} textColor={colors.white}>
              Search
            </CustomText>
          </ButtonSearch>
        </SearchFiltersContainer>
      </SearchWrapper>

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
    </Container>
  );
};

export default SearchItem;
