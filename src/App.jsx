import React from 'react'
import Navbar from "./components/Navbar/Navbar";
// import MobileNav from './components/Navbar/MobileNav/MobileNav';
import Hero from "./components/hero/Hero";
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContectMe from './components/ContactMe/ContectMe';
import Footer from './components/Footer/Footer';
import Project from './components/Projects/Projects';
const App =() => {
    return(
        <>
        <Navbar/>  
        {/* <MobileNav/> */}
        <div className="container">
            <Hero/>
            <Skills/>
            <WorkExperience/>
            <Project/>
            <ContectMe/>
        </div>
        <Footer/>
        </>
    );
 };

 export default App;