import React from 'react';
import { PressableProps } from 'react-native';

import { Wrapper, ButtonText } from './BaseButton.styles';

type CustomProps = {
  textColor?: string;
  preventTextCapitalization?: boolean;
};

type Props = PressableProps & CustomProps;

const BaseButton: React.FC<Props> = ({
  children,
  textColor,
  preventTextCapitalization = false,
  ...props
}) => (
  <Wrapper {...props}>
    <ButtonText preventCapitalize={preventTextCapitalization}>
      {children}
    </ButtonText>
  </Wrapper>
);

export { BaseButton };
