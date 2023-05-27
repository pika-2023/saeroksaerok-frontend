import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import variables from "./styles/variables";
import GlobalStyle from "./styles/GlobalStyle";
import AppLayout from "./styles/AppLayout";
import Device from "./shared/Device";
import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={{ style: theme, variables }}>
    <GlobalStyle />
    <AppLayout>
      <Device>
        <Router />
      </Device>
    </AppLayout>
  </ThemeProvider>
);

serviceWorkerRegistration.register();
