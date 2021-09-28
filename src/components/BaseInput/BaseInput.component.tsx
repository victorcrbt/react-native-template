import React from 'react';
import { TextInputProps, StyleProp, ViewStyle, TextStyle } from 'react-native';

import { Wrapper, InputLabel, Input, ErrorMessage } from './BaseInput.styles';

type CustomProps = {
  label?: string;
  errorMessage?: string | null;
  preventLabelCapitalization?: boolean;
  containerStyles?: StyleProp<ViewStyle>;
  labelStyles?: StyleProp<TextStyle>;
};

type Props = TextInputProps & CustomProps;

const BaseInput: React.FC<Props> = ({
  label,
  errorMessage,
  preventLabelCapitalization = false,
  containerStyles,
  labelStyles,
  ...props
}) => (
  <Wrapper style={containerStyles}>
    {label && (
      <InputLabel
        preventCapitalize={preventLabelCapitalization}
        style={labelStyles}>
        {label}
      </InputLabel>
    )}

    <Input {...props} />

    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </Wrapper>
);

export { BaseInput };
