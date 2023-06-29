import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Layout } from "antd";

const ErrorPage = () => {
  return (
    <Layout>
      <Header />
      <div className="ErrorBox">
        <div className="lock"></div>
        <div className="message">
          <h1>Access to this page is restricted</h1>
          <p>
            Please check with the site admin if you believe this is a mistake.
          </p>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default ErrorPage;
