import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';

import GlobalStyle from '@/theme/globalStyle';
import theme from '@/theme';
import AppLayout from '@/components/layouts/AppLayout';
import Home from '@/pages/Home';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Switch>
          <AppLayout>
            <Route path="/" exact component={Home} />
          </AppLayout>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
