import React, { Component } from "react";
import Today from "../Today/Today";
import History from "../History/History";
import { deflate } from "zlib";

const Landing = () => {
  return (
    <div>
      <div className="container">
        <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "#AA01FA", textAlign: "center" }}>
          CryptoCheck gives you a real-time platform to easily check the
          price of <br /> Bitcoin and other Altcoins
        </h1>
      </div>
      <Today />
      <History />
    </div>
  )
}

export default Landing;
