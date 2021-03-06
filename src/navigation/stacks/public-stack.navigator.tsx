import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { publicStackScreenOptions } from '@configs/navigation';
import { PublicStackRoutes } from '@constants/routes.enum';

// Screens
import { SignInScreen } from '@screens/SignIn';

const Stack = createStackNavigator<PublicStackNavigator.ParamList>();

const PublicStackNavigator = () => (
  <Stack.Navigator screenOptions={publicStackScreenOptions}>
    <Stack.Screen name={PublicStackRoutes.SIGN_IN} component={SignInScreen} />
  </Stack.Navigator>
);

export { PublicStackNavigator };
