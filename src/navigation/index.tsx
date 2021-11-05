import React from 'react';
import { useState } from '@hookstate/core';
import { NavigationContainer } from '@react-navigation/native';

import { AuthStore } from '@store/auth.store';

import { PublicStackNavigator, AuthStackNavigator } from './stacks';

const Navigation = () => {
  const { isSigned } = useState(AuthStore.state).get();

  return (
    <NavigationContainer>
      {isSigned ? <AuthStackNavigator /> : <PublicStackNavigator />}
    </NavigationContainer>
  );
};

export { Navigation };
