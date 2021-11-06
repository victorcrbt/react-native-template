import React from 'react';
import { TextInputProps, StyleProp, ViewStyle, TextStyle } from 'react-native';

import { Wrapper, InputLabel, Input, ErrorMessage } from './base-input.styles';

const BaseInput: React.FC<BaseInputComponent.Props> = ({
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
