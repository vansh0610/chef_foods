
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurentMenu from "./components/RestaurentMenu";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import { Provider } from "react-redux";
import appStore from "./utils/appstore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";


const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutus",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurentMenu />,
      },
      
      {
        path:"/cart",
        element:<Cart />
       },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

