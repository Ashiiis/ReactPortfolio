import React from 'react'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import "./ContectMe.css";
import ContactForm from './ContactForm/ContactForm';
const ContectMe = () => {
  return (
    <section className='contact-container'>
        <h5> Contact Me</h5>
        <div className='contact-content'>
            <div style={{flex: 1}}>
                <ContactInfoCard 
                    iconUrl="./assets/images/email.png"
                    text="gmail.com"/>
                <ContactInfoCard 
                    iconUrl="./assets/images/github.png"
                    text="https://github.com/Ashiiis"/>
            </div>
            <div style={{flex: 1}}>
                <ContactForm/>
            </div>
        </div>
    </section>
  );
};

export default ContectMe
