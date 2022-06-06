import React from "react";
import Services from "../assets/images/service.svg";
import Mobile from "../assets/images/mobile.svg"
import Portfolio1 from "../assets/images/portfolio1.jpg";
import Portfolio2 from "../assets/images/portfolio2.jpg";
import Testimonial from "../assets/images/testimonial.svg"
import Header from "./header";
import "../../node_modules/swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from 'swiper/react';
// import Footer from "./footer";
import "./style.css";
const portfolio = () => {
  return (
    <>
      <Header />
      <section className="Banner-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="Banner-title"></h1>
            </div>
            <div className="col-lg-6">

            </div>
          </div>
        </div>
      </section>
      <section >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="services-img">
                <img src={Services} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-text">
                <h6 className="services-title">what i do ?</h6>
                <h1 className="">Innovative Solutions To<br /> Grow Your Creative<br /> Projects</h1>
                <p className="services-para">I am Rukhsar Anwar, a Front-End-Web-Developer based in Pakistan. I specialize in helping startups grow their businesses.</p>
                <h6 className="services-title">Front-end-web-developer and QA Expert</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="My-Portfolio mt-5">
        <div className="container">
          <h6 className="my-portfolio">My Portfolio</h6>
          <h1 className="my-portfolio-text">Some Of My Latest Works.</h1>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide><img src={Portfolio1} alt="" className="Portfolio1" />
              <h1 className="swiper-text">First website</h1>
              <p className="">text here</p>
            </SwiperSlide>
            <SwiperSlide><img src={Portfolio2} alt="" className="Portfolio2" />
              <h1 className="swiper-text">First website</h1>
              <p className="">text here</p>
            </SwiperSlide>
            <SwiperSlide><img src={Portfolio1} alt="" className="Portfolio1" />
              <h1 className="swiper-text">First website</h1>
              <p className="">text here</p>
            </SwiperSlide>
            <SwiperSlide><img src={Portfolio2} alt="" className="Portfolio2" />
              <h1 className="swiper-text">First website</h1>
              <p className="">text here</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="mt-5">
        <div className="container mt-5 ">
          <div className="row">
            <div className="col-lg-6">
              <div className="services-text">
                <h6 className="services-title">MY FEATURED SKILLS</h6>
                <h1 className="">Some Interesting Facts About Me.</h1>
                <p className="services-para">Horse play chinwag bog-standard loo cup of char fanny around tinkety tonk old fruit bog me old mucker is bits and bobs, mush cheeky bugger nancy boy.!</p>
                <div className="row mt-5">
                  <div className="col-lg-6">
                    <div className="services-price">
                    <h1>200</h1>
                    <p>text</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="services-price">
                    <h1>200</h1>
                    <p>text</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="services-price">
                    <h1>200</h1>
                    <p>text</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="services-price">
                    <h1>200</h1>
                    <p>text</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-img">
                <img src={Mobile} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="services-img">
                <img src={Testimonial} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-text">
                <h6 className="services-title">CUSTOMER FEEDBACK</h6>
                <h1 className="">What Our Customers Say About John..</h1>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer />  */}
    </>
  )
}

export default portfolio





