import styled from 'styled-components/native';

type ButtonTextProps = {
  preventCapitalize: boolean;
};

export const Wrapper = styled.Pressable`
  width: 100%;
  height: ${props => props.theme.sizings.lg};
  margin-bottom: ${props => props.theme.spacings.md};

  border-radius: ${props => props.theme.borderRadius.md};
  background: ${props => props.theme.colors.primary.main};

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.primary.contrast};
  text-transform: ${props => (props.preventCapitalize ? 'none' : 'uppercase')};
  font-weight: bold;
`;
