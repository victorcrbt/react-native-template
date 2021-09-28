import styled from 'styled-components/native';

type LabelProps = {
  preventCapitalize: boolean;
};

export const Wrapper = styled.View`
  width: 100%;
  margin-bottom: ${props => props.theme.spacings.md};
`;

export const InputLabel = styled.Text<LabelProps>`
  margin-bottom: ${props => props.theme.spacings.xs};

  color: ${props => props.theme.colors.text.main};
  font-size: ${props => props.theme.fontSizes.lg};
  text-transform: ${props => (props.preventCapitalize ? 'none' : 'uppercase')};
  font-weight: bold;
`;

export const Input = styled.TextInput`
  height: ${props => props.theme.sizings.lg};
  padding: 0 ${props => props.theme.spacings.md};

  font-size: ${props => props.theme.fontSizes.lg};
  border-color: ${props => props.theme.colors.primary.main};
  border-width: ${props => props.theme.borderWidth.sm};
  border-radius: ${props => props.theme.borderRadius.md};
`;

export const ErrorMessage = styled.Text`
  margin-top: ${props => props.theme.spacings.xs};

  color: ${props => props.theme.colors.danger.main};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: 500;
`;
