import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "../component/form";
import Sample from "../component/sample";
import Footer from "../component/footer";
import Nav from "../component/Nav";

function Product() {
  return (
    <>
      {/* calling the carousel */}

      <div style={{ backgroundColor: "#BA8C63", textAlign: "center" }}>
        {/* the logo image */}

        {/* rendering the pages */}
        <div>
          <Nav />

          <Sample />
          <Form />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Product;
