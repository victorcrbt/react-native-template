import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.1);

  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.View`
  width: 100%;
  min-width: 250px;
  max-width: ${Dimensions.get('screen').width - 64}px;

  background: ${props => props.theme.colors.background.light};
  border-radius: ${props => props.theme.borderRadius.default};
`;

export const MessageText = styled.Text`
  margin: 16px 0;
  padding: 8px;

  font-size: ${props => props.theme.fontSizes.lg};

  align-self: center;
`;

export const ButtonWrapper = styled.View`
  border-top-width: 1px;
  border-top-color: ${props => props.theme.colors.background.dark};
`;

export const DismissButton = styled.TouchableOpacity`
  margin: 8px 0;
  padding: 8px;
  width: 100%;
`;

export const DismissButtonText = styled.Text`
  color: ${props => props.theme.colors.info.main};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: bold;

  align-self: center;
`;
