import React from 'react';
import { PressableProps } from 'react-native';

import { Wrapper, ButtonText, IconWrapper } from './base-button.styles';

const BaseButton: React.FC<BaseButtonComponent.Props> = ({
  children,
  textColor,
  preventTextCapitalization = false,
  icon,
  iconPosition = 'right',
  ...props
}) => (
  <Wrapper {...props}>
    {icon && iconPosition === 'left' && (
      <IconWrapper iconPosition={iconPosition}>{icon}</IconWrapper>
    )}

    <ButtonText preventCapitalize={preventTextCapitalization}>
      {children}
    </ButtonText>

    {icon && iconPosition === 'right' && (
      <IconWrapper iconPosition={iconPosition}>{icon}</IconWrapper>
    )}
  </Wrapper>
);

export { BaseButton };
