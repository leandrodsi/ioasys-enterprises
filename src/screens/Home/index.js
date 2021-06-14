import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import Container from '../../commons/components/Container';
import EnterpriseCard from '../../commons/components/Enterprise';
import { getAllEnterprises } from '../../commons/services/enterprise';
import store from '../../commons/store';

const Home = () => {
  const [enterprises, setEnterprises] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = store.getState();
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

  const getEnterprises = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getAllEnterprises();

      const data = {
        ...response.enterprises,
        expanded: false,
      };

      setEnterprises(response.enterprises);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getEnterprises();
  }, [getEnterprises]);

  if (loading) {
    return <Text>Loading enterprises</Text>;
  }

  const renderEnterprise = ({ item: enterprise }) => (
    <EnterpriseCard enterprise={enterprise} expand={expandItem} />
  );

  return (
    <Container>
      <FlatList
        data={enterprises}
        renderItem={renderEnterprise}
        keyExtractor={item => item.id}
        initialNumToRender={5}
      />
    </Container>
  );
};

export default Home;
