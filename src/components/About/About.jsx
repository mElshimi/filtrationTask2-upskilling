import React, { Component } from "react";
import style from "./About.module.css";
import Images from "../Images/Images";
export default class About extends Component {
  render() {
    return (
      <>
        <section className={`${style.about}`}>
          <div className={`${style.layer}`}></div>
          <div className="w-100 pt-5 position-absolute z2 mx-auto">
            <div className={`${style.aboutBody} container `}>
              <div className="row g-5 ">
                <div className="col-lg-6">
                  <div>
                    <div className={`${style.aboutTitle}`}>
                      <h2>ABOUT US</h2>
                      <p className="text-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </div>
                    <button className="btn btn-warning text-white px-3 py-2 rounded-5 mt-4 fw-bold">
                      CONTACT US
                    </button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={`${style.aboutImg}`}>
                    <img className="w-100" src={Images.chef} alt="chef" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
