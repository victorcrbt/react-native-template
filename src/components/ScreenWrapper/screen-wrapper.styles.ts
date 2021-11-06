import styled from 'styled-components/native';
import { ColorValue } from 'react-native';

type WrapperProps = {
  backgroundColor?: ColorValue;
};

export const Wrapper = styled.SafeAreaView<WrapperProps>`
  flex: 1;

  background: ${props =>
    props.backgroundColor
      ? (props.backgroundColor as string)
      : props.theme.colors.background.main};
`;

export const ContentWrapper = styled.View`
  padding: ${props => props.theme.spacings.sm};

  background: ${props => props.theme.colors.background.main};

  flex: 1;
`;
