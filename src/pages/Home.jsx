import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";

import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import experienceImg from "../assets/images/experience.png";
import MasonryImageGallery from "../components/image-gallery/MasonryImageGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import UttarakhandTour from "./UttarakhandTour";
import "../styles/uttrakhnad.css"


import Newsletter from "../shared/Newsletter";
const Home = () => {
  return (
    <>
      {/* ========================hero section statr======================== */}

      <section>
        <Container>
          <Row>
            <Col lg="5">
              <div className="hero__content ">
                <div className="hero__subtitle d-flex align-item-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className="highlight">Memories</span>
                </h1>
                <p>
                Plan your journey with ease – explore destinations, book stays, and enjoy hassle-free travel, all in one place!
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ==========================hero section end================================ */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What We serve</h5>
              <h4 className="services__title">We offer our best services</h4>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* ========================feature tour section======================= */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our Featured Tour</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ========================feature tour section end======================= */}

      {/* ========================experience section start======================= */}
      <section>
  <Container>
    <Row>
      {/* Left Section - Experience Content */}
      <Col lg="6">
        <div className="experience__content">
          <Subtitle subtitle="Experience" />
          <h2>
            Explore the world with confidence, <br /> backed by our expertise
          </h2>
          <p>
            With years of experience in curating unforgettable travel experiences, 
            we ensure every journey is seamless and filled with breathtaking moments. 
            Our dedicated team is here to guide you through the best destinations, 
            offering comfort, adventure, and personalized services.
          </p>
        </div>

        {/* Counter Stats */}
        <div className="counter__wrapper d-flex align-items-center gap-5">
          <div className="counter__box">
            <span>12k+</span>
            <h6>Successful Trips</h6>
          </div>
          <div className="counter__box">
            <span>2k+</span>
            <h6>Happy Travelers</h6>
          </div>
          <div className="counter__box">
            <span>16</span>
            <h6>Years of Experience</h6>
          </div>
        </div>
      </Col>

      {/* Right Section - Experience Image */}
      <Col lg="6">
        <div className="experience__img">
          <img src={experienceImg} alt="Experience" />
        </div>
      </Col>
    </Row>
  </Container>
</section>


      {/* ========================experience section end======================= */}
      {/* ================================gallery section start================== */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImageGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ================================gallery section end=============== */}
      {/* ========================Uttarakhand Tour Map Section======================= */}
      <section>
  <Container>
    <Row>
      <Col lg="12">
        <Subtitle subtitle={"Explore"} />
        <h2 className="featured__tour-title">Discover Uttarakhand</h2>
      </Col>
      <Col lg="12">
        <UttarakhandTour />
      </Col>
    </Row>
  </Container>
</section>

      {/* ================================testimonial section start =============== */}
       <section>
        <Container>
          <Row>
            <Col lg='12'>
            <Subtitle subtitle={'Fans Love'}/>
            <h2 className="testimonial_title">
              What our Fans say about us 
            </h2>
            </Col>
            <Col lg='12'>
            <Testimonials/>
            </Col>
          </Row>
        </Container>
       </section>
      {/* ================================testimonial section end =============== */}

       <Newsletter />
    </>
  );
};
export default Home;
