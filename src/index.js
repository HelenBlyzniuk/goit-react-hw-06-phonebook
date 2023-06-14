import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { store,persistor } from './components/redux/store';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
    <App />
    </Provider>
    </PersistGate>
  </React.StrictMode>
);
