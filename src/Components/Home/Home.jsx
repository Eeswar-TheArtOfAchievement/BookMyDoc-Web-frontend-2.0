import React from "react";
import "./Home.css";
import Footer from "../Navbar/Footer";
import Navbar from "../Navbar/Navbar";
import { useState , useEffect } from "react";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Apartment, ArrowForward, Diversity3, Public } from "@mui/icons-material";

const images = [
    'https://picsum.photos/1000/700',
    'https://picsum.photos/1000/700',
    'https://picsum.photos/1000/700',
    'https://picsum.photos/1000/700'
];
const items = [
    { title: 'Star 1', description: `1st Hospital to develop India's First Indigenous Coronary Stent "KALAM-RAJU" stent` },
    { title: 'Star 2', description: '1st Hospital in South India to perform SWAP Kidney Transplantation' },
    { title: 'Star 3', description: 'Performed more than 500+ Kidney Transplants' },
    { title: 'Star 4', description: 'Pioneered in Bone Marrow Transplantation with high success rate' },
    { title: 'Star 5', description: `Performed South India's first Split Liver Transplantation` },
    { title: 'Star 6', description: 'The first hospital in Eastern India to perform Awake Open Heart Surgery' },
  ];

    
  const expertiseData = [
    {
      title: 'Cardiac Sciences',
      photo: 'https://picsum.photos/1000/700',
      description: 'The Institute of Cardiac Sciences at CARE Hospitals is one of the finest in Hyderabad. An integrated facility, it has a dedicated team of cardiologists and cardiac surgeons providing comprehensive, multidisciplinary care to patients with various heart diseases and conditions.'
    },
    {
      title: 'Nephrology',
      photo: 'https://picsum.photos/1000/700',
      description: 'As leaders in kidney disease management, we offer comprehensive nephrology services under one roof. CARE Hospitals is a pioneer in renal transplantation in both live and cadaveric donor programs. Our team includes some of the leading nephrologists in India, who work closely with physical and occupational therapists to develop a comprehensive, individualized treatment plan, keeping in mind the patient’s diagnosis, lifestyle, and professional requirements.'
    },
    {
      title: 'Oncology',
      photo: 'https://picsum.photos/1000/700',
      description: 'Cancer care can be complex, prolonged and intense — both for the patient and the physician. It needs concerted, coordinated and precise planning to ensure the best outcomes. At CARE Hospitals we are focused on offering treatment plans that are not only patient-centric and multidisciplinary but also personalized for each patient. We are one of the most recognized hospitals in Hyderabad for our comprehensive cancer care and treatments.'
    },
    {
      title: 'Neurosciences',
      photo: 'https://picsum.photos/1000/700',
      description: 'The Institute of Neurosciences at CARE Hospitals provides best-in-class advanced neurological services. We are renowned for providing specialized care in stroke, epilepsy, head and spinal injuries, brain tumors, attack disorders, and movement disorders.'
    },
    {
      title: 'Urology',
      photo: 'https://picsum.photos/1000/700',
      description: 'CARE Hospitals offers state-of-the-art medical and surgical care in all aspects of adult and pediatric urology. Our areas of expertise in the field include renal transplantation, uro-oncology (for urological cancers), reconstructive urology, endo-urology for stone diseases, neuro-urology and pediatric urology.'
    },
    {
      title: 'Gastrosciences',
      photo: 'https://picsum.photos/1000/700',
      description: 'The Institute of Gastrosciences at CARE Hospitals is dedicated to excellence in patient care and has a complete range of the latest endoscopic facilities and allied interventions. CARE Hospitals also offers round-the-clock service in gastrointestinal emergencies like vomiting of blood, foreign body ingestion, and hepatic coma. We have experienced general doctors or general physicians, general surgeons, and gastrointestinal specialists who can provide multidisciplinary care with best possible outcomes.'
    },
    {
      title: 'Obstetrics and Gynecology',
      photo: 'https://picsum.photos/1000/700',
      description: `The Institute of Obstetrics and Gynecology at CARE Hospitals provides a wide range of healthcare services that meet the needs of women through all the stages of life, starting from pre-conception planning and pregnancy to menopause and beyond. We offer a full spectrum of women's health care services - from prenatal care to specialized gynecological care.`
    },
    {
      title: 'Orthopedics',
      photo: 'https://picsum.photos/1000/700',
      description: `CARE Hospitals is one of the best orthopedic hospitals in Hyderabad offering a wide range of services, including knee replacement surgeries, total hip and shoulder replacement surgeries and spine surgeries, as well as various kinds of innovative care for a broad range of musculoskeletal conditions. The institute has pioneered minimally invasive techniques in orthopedic surgery, as well as treatment for osteoarthritis and sports injury.`
    },
    {
      title: 'Pediatrics',
      photo: 'https://picsum.photos/1000/700',
      description: `The Department of Pediatrics at CARE Hospitals provides complete health solutions for children of all ages. The department has experienced pediatric care intensivists and skilled general pediatricians, state-of-the-art equipment, and Pediatric Intensive Care Units (PICU) with facilities for ventilation. In addition to encompassing several other super-specialties, the department also has a team of highly qualified doctors and paramedics to offer everyday immunization services, child nutrition services, dental, ophthalmic, and ENT screening, as well as round-the-clock emergency services.`
    }
  ];
const Home = () => {

 
    const [selectedExpertise, setSelectedExpertise] = useState(expertiseData[0]);
  
      
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to move to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    // Function to move to the previous slide
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
    // Automatically move to the next slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

        // Handle keydown events
        useEffect(() => {
          const handleKeyDown = (event) => {
              if (event.key === 'ArrowRight') {
                  nextSlide();
              } else if (event.key === 'ArrowLeft') {
                  prevSlide();
              }
          };
  
          window.addEventListener('keydown', handleKeyDown);
          return () => {
              window.removeEventListener('keydown', handleKeyDown);
          };
      }, []);
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
  return (
    <>
    <Navbar />
<div id="container">

        <div className="carousel">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
     <div className="container">
            <div className="section">
                <img src='https://picsum.photos/1000/700' alt="Placeholder" className="left-photo" />
                <div className="right-content">
                    <h2>Discover Our Story</h2>
                    <p>MyDoc Hospitals Group is a multi-Speciality healthcare provider with 17 healthcare facilities serving 7 cities across 6 states in India. A regional leader in South and Central India and counted among the top 5 pan-Indian hospital chains, MyDoc Hospitals delivers comprehensive care in over 30 medical specialities.</p>
                </div>
            </div> 
            <div className="section reverse">
                <div className="left-content">
                    <h2>Why Choose MyDoc ?</h2>
                    <ul>
                        <li><VolunteerActivismIcon />Treatments as per internationally accepted standards</li>
                        <li><Public />Global accreditation</li>
                        <li><Diversity3 /> Vast team of experienced doctors in 30+ specialties</li>
                        <li><Apartment />State-of-the-art integrated infrastructure</li>
                    </ul>
                </div>
                <img src="https://picsum.photos/1000/700" alt="Placeholder" className="right-photo" />
            </div>
        </div>

                    <h2 className="gridHead">Our Achievements</h2>
            <div className="grid-container">
            {items.map((item, index) => (
                <div className="grid-item" key={index}>
                <img
                    src="https://www.carehospitals.com/campaign/hyderabad-generic-enquire-online/assets/img/group-star.webp"
                    alt={`Star ${index + 1}`}
                    className="star-image"
                />
                <h3>{item.description}</h3>
                {/* <p>{item.description}</p> */}
                </div>
            ))}
            </div>

    <div className="main-container">
      {/* Expertise List */}
      <div className="expertise-list">
        <h2>Our Expertise</h2>
        {expertiseData.map((expertise) => (
            <div
                key={expertise.title}
                className={`expertise-item ${selectedExpertise === expertise ? 'active' : ''}`}
                onClick={() => setSelectedExpertise(expertise)}
            >
            {expertise.title} <ArrowForward />
            </div>
        ))}
        </div>

      {/* Photo Section */}
      <div className="photo-section">
        <img src={selectedExpertise.photo} alt={selectedExpertise.title} />
      </div>

      {/* Description Section */}
      <div className="description-section">
        <h2>{selectedExpertise.title}</h2>
        <p>{selectedExpertise.description}</p>
      </div>
    </div>
    <Footer />
</div>
    </>
  );
};

export default Home;
