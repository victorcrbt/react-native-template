import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { defaultTheme } from '@styles/themes';

import { SignInScreen } from '@screens/SignIn';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <SignInScreen />
  </ThemeProvider>
);

export default App;
