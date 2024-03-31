import React, { Component } from "react";
import style from "./Testimonials.module.css";
export default class Testymonials extends Component {
  render() {
    return (
      <>
        <section className={`${style.testimonials} text-center`}>
          <div className={`${style.layer}`}></div>
          <div className="w-100 position-absolute z2 mt-5 pt-3 ">
            <h2>TESTIMONIALS</h2>
            <div className={`${style.testimonialsBody}`}>
              <div className="row g-5">
                <div className="col-lg-6 col-md-12">
                  <div className={`${style.testimonial} text-start `}>
                    <h5>Kathryn Murphy</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled
                    </p>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className={`${style.testimonial} text-start `}>
                    <h5>Kathryn Murphy</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled
                    </p>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className={`${style.testimonial} text-start `}>
                    <h5>Kathryn Murphy</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled
                    </p>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className={`${style.testimonial} text-start `}>
                    <h5>Kathryn Murphy</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled
                    </p>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <button className="btn btn-warning text-white fs-4  px-5 py-3 rounded-5 m-5 fw-bold">
                CONTACT US
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}
