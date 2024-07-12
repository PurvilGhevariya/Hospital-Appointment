// import React from "react";

// const Hero = ({ title, imageUrl }) => {
//   return (
//     <div className="hero container">
//       <div className="banner">
//         <h1>{title}</h1>
//         <p>
//           Welcome to CareCompass Medical Institute, where cutting-edge technology
//           meets compassionate care. Our institute pioneers the integration of
//           advanced medical robotics, telemedicine, and AI-driven diagnostics to
//           revolutionize patient treatment and recovery. By leveraging these
//           innovations, we provide personalized, efficient, and precise
//           healthcare solutions tailored to each patient's unique needs.
//         </p>
//       </div>
//       <div className="banner">
//         <img src={imageUrl} alt="hero" className="animated-image" />
//         <span>
//           <img src="/Vector.png" alt="vector" />
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from "react";

const Hero = ({ title, imageUrl, content }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        {content && <p>{content}</p>}
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
