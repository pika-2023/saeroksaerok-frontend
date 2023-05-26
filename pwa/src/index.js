import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import Router from "./Router";
import AppLayout from "./styles/AppLayout";
import Device from "./shared/Device";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppLayout>
    <Device>
      <Router />
    </Device>
  </AppLayout>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorkerRegistration.register();
