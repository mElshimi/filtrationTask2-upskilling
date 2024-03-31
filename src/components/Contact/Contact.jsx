import React, { Component } from "react";
import style from "./Contact.module.css";
import axios from "axios";
import Joi from "joi";

export default class Contact extends Component {
  state = {
    user: {
      name: "",
      email: "",
      phone: "",
    },
  };
  validateFormData = () => {
    const schema = Joi.object({
      name: Joi.string()
        .pattern(new RegExp(/^[\w ]{3,15}$/))
        .required(),
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      phone: Joi.string()
        .pattern(new RegExp(/^01(0|1|2|5)(\d){8}$/))
        .required(),
    });
    return schema.validate(this.state.user, { abortEarly: false });
  };
  sendMail = async (e) => {
    e.preventDefault();
    let validationResponse = this.validateFormData();
    console.log(validationResponse);
    if (validationResponse.error) {
      alert("Please check the fields");
    } else {
      let { data } = await axios.post(
        `http://upskilling-egypt.com:3001/contact`,
        this.state.user
      );
      if (data.message === "Email sent successfully") {
        alert("Email sent successfully");
      }
    }
  };

  getInputValue = (e) => {
    let myUser = { ...this.state.user };
    myUser[e.target.name] = e.target.value;
    this.setState({ user: myUser });
  };
  render() {
    return (
      <>
        <section className={`${style.contact} text-center `}>
          <h2>CONTACT US</h2>
          <div className={`${style.contactBody} `}>
            <div className="row   ">
              <div className="col-lg-6">
                <div className={`${style.conForm}`}>
                  <form onSubmit={this.sendMail}>
                    <input
                      onChange={this.getInputValue}
                      type="text"
                      className=""
                      placeholder="Full Name"
                      name="name"
                    />
                    <input
                      onChange={this.getInputValue}
                      type="email"
                      className=""
                      placeholder="Email"
                      name="email"
                    />
                    <input
                      onChange={this.getInputValue}
                      type="tel"
                      className=""
                      placeholder="Phone Number"
                      name="phone"
                    />
                    <button>SEND</button>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={`${style.info} `}>
                  <a className="btn" href="mailto:upskilling.eg1@gamil.com">
                    <i className="fa-solid fa-envelope me-2 "></i>
                    upskilling.eg1@gamil.com
                  </a>

                  <a className="btn" href="tel:+201154932137">
                    <i className="fa-solid fa-phone me-2"></i>+201154932137
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
