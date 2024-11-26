// import React, { useState, useEffect } from 'react';
// import './certifications.css'; // Import the CSS for styling

// const certifications = [
//   { id: 1, title: 'Certification 1', issuer: 'Organization 1', link: 'https://example.com/certificate1', img: 'cert1.jpg' },
//   { id: 2, title: 'Certification 2', issuer: 'Organization 2', link: 'https://example.com/certificate2', img: 'cert2.jpg' },
//   { id: 3, title: 'Certification 3', issuer: 'Organization 3', link: 'https://example.com/certificate3', img: 'cert3.jpg' },
//   { id: 4, title: 'Certification 4', issuer: 'Organization 4', link: 'https://example.com/certificate4', img: 'cert4.jpg' },
//   { id: 5, title: 'Certification 5', issuer: 'Organization 5', link: 'https://example.com/certificate5', img: 'cert5.jpg' },
//   // Add more certifications as needed
// ];

// const CertificationsSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   // Auto-play functionality to slide every 3 seconds
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       nextSlide();
//     }, 3000); // 3 seconds interval

//     // Cleanup the interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length);
//   };

//   return (
//     <div className="certifications-slider-container">
//       <h2>Certifications</h2>
//       <div className="slider">
//         <button className="prev-btn" onClick={prevSlide}>&lt;</button>
        
//         <div className="certification-cards-container">
//           <div
//             className="certification-cards"
//             style={{
//               transform: `translateX(-${currentIndex * 100}%)`,
//             }}
//           >
//             {certifications.map((cert) => (
//               <div key={cert.id} className="certification-card">
//                 <img src={cert.img} alt={cert.title} className="certification-img" />
//                 <h3>{cert.title}</h3>
//                 <p>{cert.issuer}</p>
//                 <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button className="next-btn" onClick={nextSlide}>&gt;</button>
//       </div>
//     </div>
//   );
// };

// export default CertificationsSlider;






// import React, { useState, useEffect } from 'react';
// import './certifications.css';

// const CertificationsSlider = () => {
//   const certifications = [
//     { id: 1, title: 'Certification 1', image: 'cert1.jpg', description: 'Description of Certification 1' },
//     { id: 2, title: 'Certification 2', image: 'cert2.jpg', description: 'Description of Certification 2' },
//     { id: 3, title: 'Certification 3', image: 'cert3.jpg', description: 'Description of Certification 3' },
//     { id: 4, title: 'Certification 4', image: 'cert4.jpg', description: 'Description of Certification 4' },
//     { id: 5, title: 'Certification 5', image: 'cert5.jpg', description: 'Description of Certification 5' }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0); // State to track the current slide
//   const [isPlaying, setIsPlaying] = useState(true); // Controls the autoplay

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length); // Loop back to 0 after the last slide
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length); // Loop back to last slide
//   };

//   useEffect(() => {
//     if (isPlaying) {
//       const intervalId = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
//       return () => clearInterval(intervalId); // Clean up interval when the component unmounts
//     }
//   }, [isPlaying]);

//   return (
//     <div className="certifications-slider-container">
//       <h2>Certifications</h2>
//       <div className="slider">
//         <div
//           className="certification-cards-container"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Move the cards based on currentIndex
//         >
//           {certifications.map((certification) => (
//             <div className="certification-card" key={certification.id}>
//               <img src={certification.image} alt={certification.title} />
//               <h3>{certification.title}</h3>
//               <p>{certification.description}</p>
//             </div>
//           ))}
//         </div>
//         <button className="prev-btn" onClick={prevSlide}>&lt;</button>
//         <button className="next-btn" onClick={nextSlide}>&gt;</button>
//       </div>
//     </div>
//   );
// };

// export default CertificationsSlider;







import React, { useState, useEffect } from 'react';
import './certifications.css';

const CertificationsSlider = () => {
  const certifications = [
    { id: 1, title: 'Applied Data Science Capstone', description: 'IBM', },
    { id: 2, title: 'Data Analysis with Python', description: 'IBM' },
    { id: 3, title: 'Data Visualization with Python',description: 'IBM' },
    { id: 4, title: 'Databases and SQL for data science with Python', description: 'IBM' },
    { id: 5, title: 'Machine Learning with Python', description: 'IBM' },
    { id: 6, title: 'Python for Data Science AI and Development', description: 'IBM' },
    { id: 7, title: 'Tools for Data Science', description: 'IBM' },
    { id: 8, title: 'Data Science Foundation Certificate', description: 'Infosys' },
    { id: 9, title: 'Data Science Methodology', description: 'IBM' },
    { id: 10, title: 'IBM What is Data Science', description: 'IBM' },
    { id: 11, title: 'Python Programmer Certification', description: 'Infosys' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current slide
  const [isPlaying, setIsPlaying] = useState(true); // Controls the autoplay
  const [isTransitioning, setIsTransitioning] = useState(false); // Flag to control smooth transition

  // Handle next slide
  const nextSlide = () => {
    if (currentIndex === certifications.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(0); // Reset to first card
        setIsTransitioning(false);
      }, 500); // Time should match the transition duration
    } else {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  // Handle previous slide
  const prevSlide = () => {
    if (currentIndex === 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(certifications.length - 1); // Jump to last card
        setIsTransitioning(false);
      }, 500);
    } else {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  // Auto-play functionality with interval
  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
      return () => clearInterval(intervalId); // Clean up interval when component unmounts
    }
  }, [isPlaying, currentIndex]);

  return (
    <section id='certifications'>
    <div className="certifications-slider-container">
      <h2>Certifications</h2>
      <div className="slider">
        <div
          className={`certification-cards-container ${isTransitioning ? 'is-transitioning' : ''}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Move the cards based on currentIndex
        >
          {[...certifications, certifications[0]].map((certification, index) => (
            <div className="certification-card" key={index}>
              <h3>{certification.title}</h3>
              <p>{certification.description}</p>
            </div>
          ))}
        </div>
        <button className="prev-btn" onClick={prevSlide}>&lt;</button>
        <button className="next-btn" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
    </section>
  );
};

export default CertificationsSlider;




