import React, { Component } from "react";
import style from "./Footer.module.css";
export default class Footer extends Component {
  render() {
    return (
      <>
        <section className={`${style.footer} text-white text-center`}>
          <p>Upskilling Filtration-Task2</p>
          <p className="d-flex justify-content-center">
            <span className="pe-2">by</span>
            <a
              className="nav-link fw-bold "
              href="https://www.linkedin.com/in/melshimi90/"
              target="_blank"
              rel="noreferrer"
            >
              Mohamed Elshimi
            </a>
          </p>
        </section>
      </>
    );
  }
}
