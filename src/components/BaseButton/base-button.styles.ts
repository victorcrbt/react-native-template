import styled, { css } from 'styled-components/native';

type ButtonTextProps = {
  preventCapitalize: boolean;
};

type IconWrapperProps = {
  iconPosition: 'left' | 'right';
};

export const Wrapper = styled.Pressable`
  width: 100%;
  height: ${props => props.theme.sizings.lg};
  margin-bottom: ${props => props.theme.spacings.md};

  border-radius: ${props => props.theme.borderRadius.md};
  background: ${props => props.theme.colors.primary.main};

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.primary.contrast};
  text-transform: ${props => (props.preventCapitalize ? 'none' : 'uppercase')};
  font-weight: bold;
`;

export const IconWrapper = styled.View<IconWrapperProps>`
  ${props => {
    switch (props.iconPosition) {
      case 'left':
        return css`
          margin-right: ${props.theme.spacings.md};
        `;

      case 'right':
        return css`
          margin-left: ${props.theme.spacings.md};
        `;

      default:
        throw new Error('Icon position must be either left or right');
    }
  }}
`;
