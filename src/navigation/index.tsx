import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { PublicStackNavigator, AuthStackNavigator } from './stacks';

const Navigation = () => {
  // TODO: extract from global state
  const isSigned = false;

  return (
    <NavigationContainer>
      {isSigned ? <AuthStackNavigator /> : <PublicStackNavigator />}
    </NavigationContainer>
  );
};

export { Navigation };
