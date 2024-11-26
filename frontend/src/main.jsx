// frontend/src/main.jsx

import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import configureStore from "./redux/store";
// import * as sessionActions from './redux/session'

const store = configureStore();

if (import.meta.env.MODE !== "production") {
  // window.store = store;
  // window.sessionActions = sessionActions;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     {/* <ThemeProvider> */}
        <ReduxProvider store={store}>
          <RouterProvider router={router} />
        </ReduxProvider>
     {/* </ThemeProvider> */}
  </React.StrictMode>
);