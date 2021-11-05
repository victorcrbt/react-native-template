import React from 'react';
import { useState } from '@hookstate/core';

import { AuthStore } from '@src/store/auth.store';
import { BaseButton } from '@components/BaseButton';

import { Wrapper, HeaderText } from './Main.styles';

const MainScreen = () => {
  const { user } = useState(AuthStore.state).get();

  return (
    <Wrapper>
      <HeaderText>Welcome, {user && user.username}</HeaderText>

      <BaseButton onPress={AuthStore.handleSignOut}>sign out</BaseButton>
    </Wrapper>
  );
};

export { MainScreen };
