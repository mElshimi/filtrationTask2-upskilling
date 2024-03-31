import React, { Component } from "react";
import Images from "../Images/Images";
import style from "./Home.module.css";
export default class Home extends Component {
  render() {
    return (
      <>
        <section className={`${style.home}`}>
          <div className={`${style.layer1}`}></div>
          <div className={`${style.layer2} `}>
            <div className={` ${style.icons} d-flex justify-content-evenly`}>
              <a
                href="https://www.linkedin.com/company/upskilling-eg/"
                target="_blank"
                rel="noreferrer"
              >
                <i className={`fa-brands fa-twitter ${style.icon}`}></i>
              </a>
              <a
                href="https://www.facebook.com/UpskillingEG"
                target="_blank"
                rel="noreferrer"
              >
                <i className={`fa-brands fa-square-facebook ${style.icon}`}></i>
              </a>
              <a
                href="https://www.instagram.com/upskillingeg/"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className={`fa-brands fa-square-instagram ${style.icon}`}
                ></i>
              </a>
              <a
                href="https://www.linkedin.com/company/upskilling-eg/"
                target="_blank"
                rel="noreferrer"
              >
                <i className={`fa-brands fa-linkedin-in ${style.icon}`}></i>
              </a>
            </div>
          </div>
          <div className=" container pt-3 ">
            <img className={`${style.logo}`} src={Images.logo} alt="" />
          </div>
          <div className="d-flex justify-content-center align-items-center  position-absolute z-2 pt-5  ">
            <div className="row g-0 ">
              <div className="col-lg-6  ">
                <div className={`${style.caption} ms-auto  `}>
                  <h1 className=" ">TASTY PASTRIES</h1>
                  <p className={`text-white py-2`}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the
                  </p>
                  <button className=" btn btn-warning text-white px-5 py-2 fs-5 rounded-5 mt-4 fw-bold ">
                    SEE MORE
                  </button>
                </div>
              </div>
              <div className="col-lg-4  ">
                <div className={`${style.imgHome} `}>
                  <img
                    className={`w-100 ${style.homeImg}`}
                    src={Images.bread}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
