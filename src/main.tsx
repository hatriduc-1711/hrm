import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import ConnectedIntlProvider from './utils/ConnectedIntlProvider';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Toaster } from 'react-hot-toast';

import router from './routers';
import theme from './configs/material-config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedIntlProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
            <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
          </ThemeProvider>
        </ConnectedIntlProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
