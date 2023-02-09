import React from "react";
import ReactDOM from "react-dom/client";
// Named import
import HeaderComponent from "./src/components/Header";
import BodyComponent from "./src/components/Body";
import FooterComponent from "./src/components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";

// Config Driven UI
const AppLayout = () => {
  return (
    <React.Fragment>
      <div className="main">
        <HeaderComponent />
        {/* <BodyComponent /> */}
       <Outlet />
        <FooterComponent />
      </div>
    </React.Fragment> // or <></> both are same
    /*
            Header Component
            Body
                - Searchbar
                - Restaurants List
                    - Restaurant Card(many cards)
                        - Image
                        - Name
                        - Rating
                        - Cusines
            Footer
                - Links
                - Copyrights
        */
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <BodyComponent />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
