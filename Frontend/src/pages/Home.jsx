// import React from "react";
// import Hero from "../components/Hero";
// import Biography from "../components/Biography";
// import Departments from "../components/Departments";
// import MessageFrom from "../components/MessageFrom";

// const Home = () => {
//   return (
//     <>
//       <Hero
//         title={
//           "Welcome to CareCompass Medical Institute, your trusted source for healthcare services."
//         }
//         imageUrl={"/hero.png"}
//       />
//       <Biography imageUrl={"/about.png"}/>
//       <Departments />
//       <MessageFrom />
//     </>
//   );
// };

// export default Home;

// import React from "react";
// import Hero from "../components/Hero";
// import Biography from "../components/Biography";
// import Departments from "../components/Departments";
// import MessageFrom from "../components/MessageFrom";

// const Home = () => {
//   return (
//     <>
//       <Hero
//         title={
//           "Welcome to CareCompass Medical Institute, your trusted source for healthcare services."
//         }
//         imageUrl={"/hero.png"}
//         content={
//           "Welcome to CareCompass Medical Institute, where cutting-edge technology meets compassionate care. Our institute pioneers the integration of advanced medical robotics, telemedicine, and AI-driven diagnostics to revolutionize patient treatment and recovery. By leveraging these innovations, we provide personalized, efficient, and precise healthcare solutions tailored to each patient's unique needs."
//         }
//       />
//       <Biography imageUrl={"/about.png"} content="home" />
//       <Departments />
//       <MessageFrom />
//     </>
//   );
// };

// export default Home;

import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageFrom from "../components/MessageFrom";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to CareCompass Medical Institute, your trusted source for healthcare services."
        }
        imageUrl={"/hero.png"}
        content={
          "Welcome to CareCompass Medical Institute, where cutting-edge technology meets compassionate care. Our institute pioneers the integration of advanced medical robotics, telemedicine, and AI-driven diagnostics to revolutionize patient treatment and recovery. By leveraging these innovations, we provide personalized, efficient, and precise healthcare solutions tailored to each patient's unique needs."
        }
      />
      <Biography
        imageUrl={"/about.png"}
        content={
          <>
            <p>Biography</p>
            <h3> A Journey of Innovation and Compassion </h3>
            <p>
              Established in 1990 by Dr. Elizabeth Zee, ZeeCare Medical
              Institute has become a leading healthcare provider, known for
              innovative technology and compassionate care. With a team of
              experts, ZeeCare offers advanced diagnostics and treatments. The
              institute's dedication to community outreach and continuous
              improvement has earned it a trusted reputation in healthcare.
            </p>
            <p>
              Under the visionary leadership of CEO Dr. Michael Lawson, ZeeCare
              continues to lead in medical excellence, ensuring that every
              patient receives personalized and exceptional care. With a focus
              on integrating the latest medical advancements and maintaining a
              patient-centered approach, ZeeCare Medical Institute remains
              dedicated to its mission of providing high-quality healthcare to
              all.
            </p>
            <p>
              "With a steadfast commitment to excellence and innovation, ZeeCare
              Medical Institute continues to lead the way in providing
              exceptional healthcare, ensuring the well-being of every patient
              remains at the heart of its mission."
            </p>
          </>
        }
      />
      <Departments />
      <MessageFrom />
    </>
  );
};

export default Home;
