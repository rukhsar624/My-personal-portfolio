import React, { useContext, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai"
import { GrPhone } from "react-icons/gr"
import Services from "../assets/images/service.svg";
import Mobile from "../assets/images/mobile.svg";
import Portfolio1 from "../assets/images/portfolio1.jpg";
import Portfolio2 from "../assets/images/portfolio2.jpg";
import Testimonial from "../assets/images/testimonial.svg";
import Postimg1 from "../assets/images/post-img1.jpg";
import Postimg2 from "../assets/images/post-img2.jpg";
import WOW from 'wowjs';
import Header from "./header";
import "../../node_modules/swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import Counter from "./counter"
import context from './context';
import Footer from "./footer";
import "./style.css";
const Portfolio = () => {
const userData = useContext(context)

 useEffect(()=>{
  new WOW.WOW({
    live: false
}).init();
 },[]) 
  return (
    <>
      <div className="body" style={{ backgroundColor: userData.CurrentMode }}>
        <Header />
        <section className="Banner-bg">
          <div className="container pt-5">
            <div className="row pt-5">
              <div className="col-lg-6 pt-5 mt-5">
                <div class="frelencer_content">
                  <h2 className="Banner-title pt-5 wow fadeInLeft " style={{color:userData.FontColor}} data-wow-delay="0.5s">Hey there!<br />
                    I'm Rukhsar Anwar Independent <span>Freelancer</span>
                  </h2>
                  <h4 class="react-reveal"><span>I create thousand off website</span></h4>
                  <a href="" class="react-reveal  theme_btn active">Hire me</a>
                </div>
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
                  <h6 className="services-title" style={{color:userData.FontColor}}>what i do ?</h6>
                  <h1 className="" style={{color:userData.FontColor}}>Innovative Solutions To<br /> Grow Your Creative<br /> Projects</h1>
                  <p className="services-para" style={{color:userData.FontColor}}>I am Rukhsar Anwar, a Front-End-Web-Developer based in Pakistan. I specialize in helping startups grow their businesses.</p>
                  <h6 className="services-title" style={{color:userData.FontColor}}>Front-end-web-developer and QA Expert</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="My-Portfolio mt-5">
          <div className="container">
            <h6 className="my-portfolio">My Portfolio</h6>
            <h1 className="my-portfolio-text" style={{color:userData.FontColor}}>Some Of My Latest Works.</h1>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              loop={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><img src={Portfolio1} alt="" className="Portfolio1" />
                <h1 className="swiper-text" style={{color:userData.FontColor}}>First website</h1>
                <p className="" style={{color:userData.FontColor}}>text here</p>
              </SwiperSlide>
              <SwiperSlide><img src={Portfolio2} alt="" className="Portfolio2" />
                <h1 className="swiper-text" style={{color:userData.FontColor}}>First website</h1>
                <p className="" style={{color:userData.FontColor}}>text here</p>
              </SwiperSlide>
              <SwiperSlide><img src={Portfolio1} alt="" className="Portfolio1" />
                <h1 className="swiper-text" style={{color:userData.FontColor}}>First website</h1>
                <p className="" style={{color:userData.FontColor}}>text here</p>
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
                  <h1 className="" style={{color:userData.FontColor}}>Some Interesting Facts About Me.</h1>
                  <p className="services-para" style={{color:userData.FontColor}}>Horse play chinwag bog-standard loo cup of char fanny around tinkety tonk old fruit bog me old mucker is bits and bobs, mush cheeky bugger nancy boy.!</p>
                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="services-price">
                        <h1 style={{color:userData.FontColor}}><Counter start={0} end={200} /></h1>
                        <p style={{color:userData.FontColor}}>text</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="services-price">
                        <h1 style={{color:userData.FontColor}}><Counter start={0} end={120} /></h1>
                        <p style={{color:userData.FontColor}}>text</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="services-price">
                        <h1 style={{color:userData.FontColor}}><Counter start={0} end={4} /></h1>
                        <p style={{color:userData.FontColor}}>text</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="services-price">
                        <h1 style={{color:userData.FontColor}}><Counter start={0} end={10} /></h1>
                        <p style={{color:userData.FontColor}}>text</p>
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
                  <h1 className="" style={{color:userData.FontColor}}>What Our Customers Say About John..</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-partner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="services-text">
                  <h6 className="services-title">MY GREAT PARTNERS</h6>
                  <h1 className="" style={{color:userData.FontColor}}>Some Of Great Companies Portfolios Discribe.</h1>
                  <p className="services-para" style={{color:userData.FontColor}}>Cack brolly butty grub chancer smashing brilliant vagabond, chimney pot blower such a fibber ummm I'm telling chinwag he lost his bottle nancy boy.</p>
                  <div className="d-flex align-item-center pt-4">
                    <div className="">
                      <h1 style={{color:userData.FontColor}}>1k</h1>
                      <p style={{color:userData.FontColor}}>Total clients</p>
                    </div>
                    <div>
                      <h1 style={{color:userData.FontColor}}>1k</h1>
                      <p style={{color:userData.FontColor}}>Total clients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="services-img">
                  <img src={Services} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5">
          <h6 className="my-blog">OUR BLOG</h6>
          <h1 className="my-blog-text" style={{color:userData.FontColor}}>News And Updates</h1>
          <div className="container">
            <div className="div1">
              <div className="row">
                <div className="col-lg-6">
                  <div>
                    <div className="wrapper">
                      <div className="navi">
                        <div className="date text-center  d-flex position-absolute">
                          <span>Jan<br />
                            <br />
                            14
                          </span>
                        </div>
                        <img src={Postimg1} alt="" />
                        <div className="infoi">
                          <div className="fixed">
                            <h6 >BY:Tasnim | 0 comment</h6>
                            <h2 >Contrary to popular belief</h2>
                            <p className="mt-4 pb-3">Suspendisse in mattis neque, sed accu- msan erat. Maecenas eget metus dui. Vestibulum accumsan massa quam..</p>
                            <div className="d-flex">
                              <div>
                                <h6>Read More</h6>
                              </div>
                              <div>
                                <AiOutlineArrowRight />
                              </div>
                            </div>
                            <div className="d-flex align-items-end flex-column">
                              <div class="position-relative arrow-links">

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div>
                    <div className="wrapper">
                      <div className="navi">
                        <div className="date text-center  d-flex position-absolute">
                          <span>Mar<br />
                            <br />
                            30
                          </span>
                        </div>
                        <img src={Postimg2} alt="" />
                        <div className="infoi">
                          <div className="fixed">
                            <h6 className="">BY:Tasnim | 0 comment</h6>
                            <h2>Contrary to popular belief</h2>
                            <p className="mt-4 pb-3">Suspendisse in mattis neque, sed accu- msan erat. Maecenas eget metus dui. Vestibulum accumsan massa quam..</p>
                            <div className="d-flex">
                              <div className="">
                                <h6>Read More</h6>
                              </div>
                              <div className="">
                                <AiOutlineArrowRight />
                              </div>
                            </div>
                            <div className="d-flex align-items-end flex-column">
                              <div class="position-relative arrow-links">

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5 pt-5">
          <div className="container mt-5 pt-5">
            <div className="row">
              <div className="col-lg-6">
                <h6 className="get">GET IN TOUCH</h6>
                <h1 className="get-text">Talk Or Meet With Me</h1>
                <div className="contact-info">
                  <div className="first-col"><GrPhone /></div>
                  <div className="first-col-inner" style={{color:userData.FontColor}}>Call me now <br />
                    123-456-789-0
                  </div>
                </div>
                <div className="contact-info">
                  <div className="first-col"><GrPhone /></div>
                  <div className="first-col-inner" style={{color:userData.FontColor}}>Call me now <br />
                    123-456-789-0
                  </div>
                </div>
                <div className="contact-info">
                  <div className="first-col"><GrPhone /></div>
                  <div className="first-col-inner" style={{color:userData.FontColor}}>Call me now <br />
                    123-456-789-0
                  </div>
                </div>
                <div className="contact-info">
                  <div className="first-col"><GrPhone /></div>
                  <div className="first-col-inner" style={{color:userData.FontColor}}>Call me now <br />
                    123-456-789-0
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h6 className="get">Contact Us</h6>
                <h1 className="get-text">Let Me Know Here Know Here</h1>
                <div className="row mt-5">
                  <div className="col-lg-6">
                    <input type="text" class="from-control" placeholder="Your Name" />
                  </div>
                  <div className="col-lg-6">
                    <input type="email" class="from-control" placeholder="Your Email" />
                  </div>
                  <div className="col-lg-6 mt-5">
                    <input type="number" class="from-control" placeholder="Phone" />
                  </div>
                  <div className="col-lg-6 mt-5">
                    <input type="text" class="from-control" placeholder="Subject" />
                  </div>
                  <div className="col-lg-12 mt-5">
                    <textarea name="message" id="message" class="form-control" rows="6" placeholder="Your Message"></textarea>
                  </div>
                  <div className="col-lg-6">
                    <a href="">
                      <button type="button" className="btns">
                        Send Message
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default Portfolio






