import React from "react";
import aboutImg from "./assets/about.avif";

const About = () => {
  return (
    <div className="container px-0 p-5">
      <div className="col-12 row">
        <div className="col-6">
          <h3>Welcome to Hyderabad IT Trainings</h3>
          <p>
            Hyderabad IT Trainings is a Hyderabad based Training Institute
            delivering classroom and online trainings in India, USA and UK,
            Australia. We are Providing high quality training is our core value.
            We offer both classroom and online training on niche technologies
            which are in high demand. All our trainers are IT professionals with
            rich experience.
          </p>
          <p>
            Hyderabad IT Trainings is a leading training and placement company
            in hyderabad managed by industry experts with more than 9+ years of
            experience in leading MNC Companies. We are wellknown for our
            practical approach towards training that enables students to gain
            realtime exposure.
          </p>
          <p>
            Hyderabad IT Trainings is a one-stop shop for IT courses, Web
            Development services & Recruitment services. Hyderabad IT Trainings
            concentrates on its vision of building up strong client and business
            partnerships. To this end, Hyderabad IT Trainings offers Real-time
            and placement focuses training services.
          </p>
        </div>
        <div className="col-6">
          <img src={aboutImg} alt="" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default About;
