import React, {useRef} from 'react'
import './Projects.css'
import { PERSONAL_PROJECTS } from '../../utils/data';
import ProjectCard from './ProjectCard/ProjectCard';
import Slider from "react-slick";
const Project = () => {
    const sliderRef = useRef();
    const settings ={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ],        
    }; 
    const slideRight = () => {
        sliderRef.current.slickNext();
    };
    const slideLeft = () => {
        sliderRef.current.slickPrev();
    };

  return (
    
      <section className='experience-container'>
        <h5>Projects</h5>
        <div className='experience-content'>
            <div className='arrow-right' onClick={slideRight}>
            <span className="material-symbols-outlined"><img src="./assets/images/right.png" alt="R" style={{ height: "1.5rem", width: "1.5rem" }}  /></span>
            </div>
            <div className='arrow-left' onClick={slideLeft}>
            <span className="material-symbols-outlined"><img src="./assets/images/left.png" alt="L" style={{ height: "1.5rem", width: "1.5rem" }} /></span>            
            </div>
            <Slider ref={sliderRef} {...settings}>
            {PERSONAL_PROJECTS.map((item) =>(
                <ProjectCard key={item.title} details={item}/>
            ))}
            </Slider>
            
        </div>
      </section>
    
  );
};

export default Project;
