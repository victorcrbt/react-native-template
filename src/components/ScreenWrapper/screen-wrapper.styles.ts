import styled from 'styled-components/native';

type WrapperProps = ScreenWrapperComponent.Styles.WrapperProps;

export const Wrapper = styled.SafeAreaView<WrapperProps>`
  flex: 1;

  background: ${props =>
    props.backgroundColor
      ? (props.backgroundColor as string)
      : props.theme.colors.background.default.main};
`;

export const ContentWrapper = styled.View`
  padding: ${props => props.theme.spacings.sm};

  background: ${props => props.theme.colors.background.default.main};

  flex: 1;
`;
