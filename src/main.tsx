import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { antdTheme } from "@/configs/antdTheme";
import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import User from "./pages/user";
import Role from "./pages/role";

import "@/configs/global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/role",
        element: <Role />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={antdTheme}>
      <StyleProvider hashPriority="high">
        <RouterProvider router={router} />
      </StyleProvider>
    </ConfigProvider>
  </React.StrictMode>
);
