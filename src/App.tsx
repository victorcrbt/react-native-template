import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { defaultTheme } from './styles/themes';
import { Navigation } from './navigation';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <Navigation />
  </ThemeProvider>
);

export default App;
