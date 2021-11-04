import React from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import ExceptionalDental from "../ExceptionalDental/ExceptionalDental";
import Info from "../Info/Info";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <ExceptionalDental></ExceptionalDental>
      <AppointmentBanner></AppointmentBanner>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
