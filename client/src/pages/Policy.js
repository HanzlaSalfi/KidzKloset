import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center">Privacy Policy</h1>
          <p>1. Returns are accepted within 30 days of delivery</p>
          <p>2. Items must be in original condition with all tags and packaging intact</p>
          <p>3. Refunds will be processed within 5-7 business days of receiving the returned item</p>
          <p>4. Refunds will be issued in the original form of payment</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
