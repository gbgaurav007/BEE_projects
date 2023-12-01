import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Contact(){
    return(
    <div style={{ display: 'flex' }} className='container'>
        <h1>Get in Touch</h1>
    <div style={{ flex: 1, padding: '20px' }} className='form-container'>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder='Your Name...'/>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder='Your Email...'/>
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" placeholder='Your Message...'/>
        </div>

        <div>
          <button type="submit">Send</button>
        </div>

        <div className='attach-documents'>
          <a href="#contact">Attach Documents <FontAwesomeIcon icon={faPaperclip} /></a>
        </div>
      </form>
    </div>

    <div style={{ flex: 1 }} className='map-container'>
      <iframe 
      title='map'
      src={`https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d219724.02731599018!2d76.55869763640341!3d30.62866088400299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1schitkara%20university!5e0!3m2!1sen!2sin!4v1700992990133!5m2!1sen!2sin`}
      width="350" 
      height="280" 
      style={{border:0}}
      allowfullscreen>
      </iframe>
      <div className="contact-info">
          <div className='hi'>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>&nbsp;&nbsp;example@example.com</span>
          </div>

          <div className='hi'>
            <FontAwesomeIcon icon={faPhone} />
            <span>&nbsp;&nbsp;+1 (123) 456-7890</span>
          </div>

          <div className='hi'>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>&nbsp;&nbsp;123 Main Street, Cityville</span>
          </div>
        </div>
    </div>
  </div>
    );
}

export default Contact;