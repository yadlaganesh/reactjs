import React from "react";
import ReactDOM from "react-dom/client";
// Named import
import HeaderComponent from "./src/components/Header";
import BodyComponent from "./src/components/Body";
import FooterComponent from "./src/components/Footer";

// Config Driven UI

const AppLayout = () => {
  return (
    <React.Fragment>
      <div className="main">
        <HeaderComponent />
        <BodyComponent />
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
