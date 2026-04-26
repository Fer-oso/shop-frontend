import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/store";
import router from "./router/routes";
import { setupInterceptors } from "./providers/axios/axiosInstace";

setupInterceptors(store);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
