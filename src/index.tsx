import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';

import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from 'redux/store/store';
import PersistLoadingScreen from 'pages/PersistLoadingScreen';
import queryClient, { ReactQueryProvider } from 'components/ReactQueryProvider';
// Rendering issue 있음\
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement,
// );

// const rootNode = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <StrictMode>
    <HelmetProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={<PersistLoadingScreen />} persistor={persistor}>
          <ReactQueryProvider queryClient={queryClient}>
            <Router>
              <App />
            </Router>
          </ReactQueryProvider>
        </PersistGate>
      </ReduxProvider>
    </HelmetProvider>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
