import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { authStackScreenOptions } from '@configs/navigation';
import { AuthStackRoutes } from '@constants/routes.enum';

// Screens
import { MainScreen } from '@screens/Main';

type ParamList = {
  [AuthStackRoutes.MAIN]: undefined;
};

const Stack = createStackNavigator<ParamList>();

const AuthStackNavigator = () => (
  <Stack.Navigator screenOptions={authStackScreenOptions}>
    <Stack.Screen name={AuthStackRoutes.MAIN} component={MainScreen} />
  </Stack.Navigator>
);

export { AuthStackNavigator };
