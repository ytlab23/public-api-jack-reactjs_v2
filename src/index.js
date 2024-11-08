import React from 'react';
import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter } from 'react-router-dom';
//
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from 'react-redux';
import { store, persistor } from 'store';
// 
import App from 'App';
//
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        {/* <HashRouter basename="/"> */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
        {/* </HashRouter> */}
    </PersistGate>
</Provider>
);