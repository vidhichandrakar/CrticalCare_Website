import React, { Fragment } from "react";
import "./Aboutus.css";
import Logo from "../../Media/Images/Logo.png";
import { AboutData } from "../../JsonData/AboutData/AboutData";
import AppLogo from "../../Media/Images/App_Logo.jpg";
import GoogleLogo from "../../Media/Images/Google_logo.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Aboutus() {
  return (
    <Fragment>
      <Header />
      <div>
        <div className="Aboutbox box-col">
          <div className="width_margin textLeft">
            <h1>About Us</h1>
            <p>Physics is ❤️. Class 11th, 12th, JEE, NEET preparation</p>
            <p>
              PhysicsWallah aims at providing quality content to every child for
              free. Live classes, video lectures, test series, lecturewise
              notes, topicwise assignment with best questions, dynamic exercise
              and much more. Almost 90% content on this App is for free and will
              always be. The founder Alakh Pandey stands for education for every
              child irrespective of it's economic status.
            </p>
          </div>
          <div className="box-fix">
            <div className="w30 box">
              <img
                src={Logo}
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                width={250}
                height={50}
              />
            </div>
          </div>
        </div>
        <div className="Testmain">
          <div className="testBox">
            <p>{AboutData.content1.heading}</p>
            <p>{AboutData.content1.para}</p>
          </div>
          <div className="testBox">
            <p>{AboutData.content1.heading}</p>
            <p>{AboutData.content1.para}</p>
          </div>
          <div className="testBox">
            <p>{AboutData.content1.heading}</p>
            <p>{AboutData.content1.para}</p>
          </div>
          <div className="testBox">
            <p>{AboutData.content1.heading}</p>
            <p>{AboutData.content1.para}</p>
          </div>
          <div className="testBox">
            <p>{AboutData.content5.heading}</p>
            <p>{AboutData.content5.para}</p>
          </div>
          <div className="testBox Download-row">
            <p>Download App</p>
            <a href="#">
              <img
                src={GoogleLogo}
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                width={100}
                height={40}
                className="margin DownloadMargin "
              />
            </a>
            <a href="#">
              <img
                src={AppLogo}
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                width={100}
                height={40}
                className="margin DownloadMargin "
              />
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
}

export default Aboutus;
