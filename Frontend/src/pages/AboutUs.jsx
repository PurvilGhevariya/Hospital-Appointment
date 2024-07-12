// import React from "react";
// import Hero from "../components/Hero";
// import Biography from "../components/Biography";
// const AboutUs = () => {
//   return (
//     <>
//       <Hero
//         title={"Learn More About Us | ZeeCare Medical Institute"}
//         imageUrl={"/about.png"}
//         content={
//           "At CareCompass Medical Institute, we believe that healthcare is not just about treating illnesses; it's about empowering individuals to live their healthiest lives. Since our inception, we have been driven by a passion for patient-centered care and a commitment to excellence. Our state-of-the-art facility and team of compassionate professionals are dedicated to providing comprehensive medical services tailored to the unique needs of each patient. From preventive care to specialized treatments, we prioritize your well-being every step of the way. With a focus on innovation, integrity, and inclusivity, we are honored to serve as your trusted partner on your journey to optimal health."
//         }
//       />
//       <Biography imageUrl={"/whoweare.png"} />
//     </>
//   );
// };

// export default AboutUs;


// import React from "react";
// import Hero from "../components/Hero";
// import Biography from "../components/Biography";

// const AboutUs = () => {
//   return (
//     <>
//       <Hero
//         title={"Learn More About Us | ZeeCare Medical Institute"}
//         imageUrl={"/about.png"}
//         content={
//           "At CareCompass Medical Institute, we believe that healthcare is not just about treating illnesses; it's about empowering individuals to live their healthiest lives. Since our inception, we have been driven by a passion for patient-centered care and a commitment to excellence. Our state-of-the-art facility and team of compassionate professionals are dedicated to providing comprehensive medical services tailored to the unique needs of each patient. From preventive care to specialized treatments, we prioritize your well-being every step of the way. With a focus on innovation, integrity, and inclusivity, we are honored to serve as your trusted partner on your journey to optimal health."
//         }
//       />
//       <Biography imageUrl={"/whoweare.png"} />
//       <div className="container about-us">
//         <h3>Our Mission</h3>
//         <p>
//           Our mission is to provide high-quality healthcare services that meet
//           the needs and exceed the expectations of our patients. We are
//           dedicated to advancing medical knowledge and improving patient care
//           through cutting-edge technology and compassionate practice.
//         </p>
//         <h3>Our Vision</h3>
//         <p>
//           We envision a world where healthcare is accessible, affordable, and
//           effective for everyone. Our goal is to be at the forefront of medical
//           innovation and patient-centered care, continuously improving to meet
//           the evolving needs of our community.
//         </p>
//         <h3>Our Values</h3>
//         <p>
//           Compassion, Integrity, Excellence, Innovation, and Collaboration. These values guide our actions and decisions as we strive to improve the health and well-being of our patients.
//         </p>
//       </div>
//     </>
//   );
// };

// export default AboutUs;


import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";

const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | ZeeCare Medical Institute"}
        imageUrl={"/about.png"}
        content={
          "At CareCompass Medical Institute, we believe that healthcare is not just about treating illnesses; it's about empowering individuals to live their healthiest lives. Since our inception, we have been driven by a passion for patient-centered care and a commitment to excellence. Our state-of-the-art facility and team of compassionate professionals are dedicated to providing comprehensive medical services tailored to the unique needs of each patient. From preventive care to specialized treatments, we prioritize your well-being every step of the way. With a focus on innovation, integrity, and inclusivity, we are honored to serve as your trusted partner on your journey to optimal health."
        }
      />
      <Biography
        imageUrl={"/whoweare.png"}
        content={
          <>
            <h3>Who We Are</h3>
            <p>
              At CareCompass Medical Institute, we believe that healthcare is not just about treating illnesses; it's about empowering individuals to live their healthiest lives. Since our inception, we have been driven by a passion for patient-centered care and a commitment to excellence.
            </p>
            <p>
              Our state-of-the-art facility and team of compassionate professionals are dedicated to providing comprehensive medical services tailored to the unique needs of each patient. From preventive care to specialized treatments, we prioritize your well-being every step of the way.
            </p>
            <p>
              With a focus on innovation, integrity, and inclusivity, we are honored to serve as your trusted partner on your journey to optimal health.
            </p>
          </>
        }
      />
    </>
  );
};

export default AboutUs;
