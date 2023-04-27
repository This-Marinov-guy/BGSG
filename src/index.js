// React and Redux Required
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import PageLoading from "./elements/ui/PageLoading";

import * as serviceWorker from "./util/serviceWorker";

const Root = lazy(() => import("./Root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Suspense fallback={<PageLoading />}>
      <Root />
    </Suspense>
  </Provider>
);

serviceWorker.register();
