import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'styled-components';
import { BASE_IMAGE_URL } from '../../constants/host';
import { formatCurrency } from '../../helpers/formatCurrency';
import { openLink } from '../../helpers/openLink';
import {
  CardHeader,
  CardImage,
  CardInfo,
  CardText,
  CardTextTitle,
  CardTextValue,
  SocialButton,
  SocialIconsContainer,
  Wrapper,
} from './styled';

const EnterpriseCard = ({ enterprise, expand }) => {
  const {
    colors,
    typography: { sizes },
  } = useTheme();

  const expandIcon = enterprise.expanded ? 'chevron-up' : 'chevron-down';

  return (
    <Wrapper>
      <CardHeader>
        <CardImage
          source={{
            uri: `${BASE_IMAGE_URL + enterprise.photo}`,
          }}
        />
        <CardInfo>
          <CardText
            textSize={sizes.large}
            textColor={colors.primary}
            $bold
            ellipsizeMode="tail"
            numberOfLines={1}>
            {enterprise.enterprise_name}
          </CardText>
          <SocialIconsContainer>
            <SocialButton
              onPress={() => openLink(enterprise.facebook)}
              disabled={!enterprise?.facebook}>
              <Icon
                name="facebook-f"
                size={25}
                color={enterprise?.facebook ? colors.primary : colors.lightGray}
              />
            </SocialButton>
            <SocialButton
              onPress={() => openLink(enterprise.twitter)}
              disabled={!enterprise?.twitter}>
              <Icon
                name="twitter"
                size={25}
                color={enterprise?.facebook ? colors.primary : colors.lightGray}
              />
            </SocialButton>
            <SocialButton
              onPress={() => openLink(enterprise.linkedin)}
              disabled={!enterprise?.linkedin}>
              <Icon
                name="linkedin"
                size={25}
                color={enterprise?.facebook ? colors.primary : colors.lightGray}
              />
            </SocialButton>
          </SocialIconsContainer>

          {enterprise?.email && (
            <CardText textSize={sizes.medium} textColor={colors.gray}>
              {enterprise.email}
            </CardText>
          )}

          {enterprise?.phone && (
            <CardText textSize={sizes.medium} textColor={colors.gray}>
              {enterprise.phone}
            </CardText>
          )}
        </CardInfo>
      </CardHeader>

      <TouchableWithoutFeedback
        style={{ alignSelf: 'center' }}
        onPress={() => expand(enterprise.id)}>
        <Icon
          name={expandIcon}
          size={20}
          color={enterprise?.facebook ? colors.primary : colors.lightGray}
        />
      </TouchableWithoutFeedback>

      {enterprise.expanded && (
        <>
          <CardTextTitle>Description:</CardTextTitle>
          <CardTextValue>{enterprise.description}</CardTextValue>
          <CardTextTitle>
            City: <CardTextValue>{enterprise.city}</CardTextValue>
          </CardTextTitle>
          <CardTextTitle>
            Country: <CardTextValue>{enterprise.country}</CardTextValue>
          </CardTextTitle>
          <CardTextTitle>
            Value:{' '}
            <CardTextValue>{formatCurrency(enterprise.value)}</CardTextValue>
          </CardTextTitle>
          <CardTextTitle>
            Share price:{' '}
            <CardTextValue>
              {formatCurrency(enterprise.share_price)}
            </CardTextValue>
          </CardTextTitle>
          <CardTextTitle>
            Enterprise type:{' '}
            <CardTextValue>{`${enterprise?.enterprise_type?.id} - ${enterprise?.enterprise_type?.enterprise_type_name}`}</CardTextValue>
          </CardTextTitle>
        </>
      )}
    </Wrapper>
  );
};

export default EnterpriseCard;
