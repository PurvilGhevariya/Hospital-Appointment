// import React from "react";

// const Biography = ({ imageUrl }) => {
//   return (
//     <>
//       <div className="container biography">
//         <div className="banner">
//           <img src={imageUrl} alt="aboutImg" />
//         </div>
//         <div className="banner">
//           <p>Biography</p>
//           {/* <h3>Who We Are</h3> */}
//           <h3> A Journey of Innovation and Compassion </h3>
//           <p>
//             Established in 1990 by Dr. Elizabeth Zee, ZeeCare Medical Institute
//             has become a leading healthcare provider, known for innovative
//             technology and compassionate care. With a team of experts, ZeeCare
//             offers advanced diagnostics and treatments. The institute's
//             dedication to community outreach and continuous improvement has
//             earned it a trusted reputation in healthcare.
//           </p>
//           {/* <p>We are all in 2024!</p>
//           <p>We are working on a MERN STACK PROJECT.</p> */}
//           <p>
//             Under the visionary leadership of CEO Dr. Michael Lawson, ZeeCare
//             continues to lead in medical excellence, ensuring that every patient
//             receives personalized and exceptional care. With a focus on
//             integrating the latest medical advancements and maintaining a
//             patient-centered approach, ZeeCare Medical Institute remains
//             dedicated to its mission of providing high-quality healthcare to
//             all.
//           </p>
//           <p>
//             "With a steadfast commitment to excellence and innovation, ZeeCare
//             Medical Institute continues to lead the way in providing exceptional
//             healthcare, ensuring the well-being of every patient remains at the
//             heart of its mission."
//           </p>
//           {/* <p>Coding is fun!</p> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Biography;


import React from "react";

const Biography = ({ imageUrl, content }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="aboutImg" />
        </div>
        <div className="banner">
          {content}
        </div>
      </div>
    </>
  );
};

export default Biography;
