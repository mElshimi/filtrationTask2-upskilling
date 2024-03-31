import React, { Component } from "react";
import style from "./Work.module.css";
import Images from "../Images/Images";
export default class Work extends Component {
  render() {
    return (
      <>
        <section className={`${style.work}`}>
          <div className={`${style.layer} z-0`}></div>
          <div className="w-100 pt-5 position-absolute z2 ">
            <div className="workBody container text-center ">
              <div className="row ">
                <div className="col-lg-3 ">
                  <div className={`${style.workText}`}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque voluptate culpa quo voluptatem nemo non?
                    </p>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className={`${style.workTitle}`}>
                    <h2>HOW WE WORK</h2>
                  </div>
                </div>
              </div>
              <div className={`${style.workProducts} container `}>
                <div className="row g-3">
                  <div className="col-lg-3 col-md-6">
                    <div className={`${style.workProduct}`}>
                      <img src={Images.product1} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className={`${style.workProduct}`}>
                      <img src={Images.product2} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className={`${style.workProduct}`}>
                      <img src={Images.product3} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className={`${style.workProduct}`}>
                      <img src={Images.product4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-warning text-white px-3 py-2 rounded-5 mt-4 fw-bold">
                CONTACT US
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}
