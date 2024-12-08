import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - KidzKloset"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-5">
          KidzKloset is a user-friendly and secure ecommerce website that offers a seamless online shopping experience. With a wide range of products and services, KidzKloset provides:<br></br><br></br>

<b>Easy Navigation:</b> Intuitive interface for effortless browsing and purchasing<br></br>
<b>Secure Payment Options:</b> Multiple payment methods with robust security measures<br></br>
<b>Fast Shipping:</b> Quick and reliable shipping options to ensure timely delivery<br></br>
<b>Personalized Experience:</b> Customized recommendations and offers based on user preferences<br></br><br></br>
24/7 Customer Support: Dedicated customer service team for assistance and support
KidzKloset is built on a robust ecommerce platform, ensuring a smooth and secure online shopping experience for its customers.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
