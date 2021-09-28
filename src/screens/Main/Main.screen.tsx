import React from 'react';

import { BaseButton } from '@components/BaseButton';

import { Wrapper, HeaderText } from './Main.styles';

const MainScreen = () => (
  <Wrapper>
    <HeaderText>Main Screen</HeaderText>

    <BaseButton>sign out</BaseButton>
  </Wrapper>
);

export { MainScreen };
