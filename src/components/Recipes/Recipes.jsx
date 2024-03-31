import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Images from "../Images/Images";
import style from "./Recipes.module.css";
import axios from "axios";
// owl.carousel/dist/assets/owl.theme.default.css
export default class Recipes extends Component {
  state = { meals: [] };
  getMeals = async () => {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast`
    );
    this.setState({ meals: data.meals });
    // console.log(data);
  };
  componentDidMount() {
    this.getMeals();
    // console.log(this.state.data);
  }
  render() {
    console.log(this.state.meals);
    return (
      <>
        <section className={`${style.recipes} pt-5 text-center `}>
          <div className="container">
            <h2 className="text-center">RECIPES</h2>;
            {this.state.meals.length > 0 ? (
              <Swiper
                effect={`coverflow`}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={`auto`}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={{ el: "swiper-pagination", clickable: true }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className=" swiper-container py-5"
              >
                {this.state.meals.map((meal) => (
                  <SwiperSlide className={`${style.slider}`} key={meal.idMeal}>
                    <img className="w-100" src={meal.strMealThumb} alt="" />
                    <div>
                      <h5>{meal.strMeal}</h5>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <i className="fa fa-spinner fa-spin fa-5x"></i>
            )}
            <button className="btn btn-warning text-white fs-4  px-5 py-3 rounded-5 mt-4 fw-bold">
              CONTACT US
            </button>
          </div>
        </section>
      </>
    );
  }
}
