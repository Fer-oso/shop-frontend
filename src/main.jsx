import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/store";
import router from "./router/routes";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
