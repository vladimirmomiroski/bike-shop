import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
    <footer className="center">
        <div className='footer-box'>
            <h2 className='title-footer'>Social share</h2>
            <div className="footer-icon-box">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="icons-links"><i className="fab fa-facebook-f f-icons"></i></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icons-links"><i className="fab fa-instagram f-icons"></i></a>
                <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer" className="icons-links" ><i className="fab fa-twitter f-icons"></i></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="icons-links"><i className="fab fa-linkedin-in f-icons"></i></a>
            </div>
        </div>
        <div className="footer-box">
                <h2 className="title-footer">Event info</h2>
                <div className="footer-links">
                    <a className="footer-link" href="index.html">Enter now</a>
                    <a className="footer-link" href="index.html">Event info</a>
                    <a className="footer-link" href="index.html">Course Maps</a>
                    <a className="footer-link" href="index.html">Race Pack</a>
                    <a className="footer-link" href="index.html">Results</a>
                    <a className="footer-link" href="index.html">FAQs</a>
                    <a className="footer-link" href="index.html">Am i Registered?</a>
                </div>
            </div>
            <div className="footer-box">
                    <h2 className="title-footer">Registration</h2>
                    <div className="footer-links">
                        <a className="footer-link" href="index.html">Volunteers</a>
                        <a className="footer-link" href="index.html">Gallery</a>
                        <a className="footer-link" href="index.html">Press</a>
                        <a className="footer-link" href="index.html">Results</a>
                        <a className="footer-link" href="index.html">Privacy Policy</a>
                        <a className="footer-link" href="index.html">Service Plus</a>
                        <a className="footer-link" href="index.html">Contacts</a>
                    </div>
                </div>
                <div className="footer-box">
                    <h2 className="title-footer">Schedule</h2>
                    <div className="footer-links">
                        <a className="footer-link" href="index.html">Gallery</a>
                        <a className="footer-link" href="index.html">About</a>
                        <a className="footer-link" href="index.html">Videos</a>
                        <a className="footer-link" href="index.html">Results</a>
                        <a className="footer-link" href="index.html">FAQs</a>
                        <a className="footer-link" href="index.html">Results</a>
                        <a className="footer-link" href="index.html">Volunteers</a>
                    </div>
                </div>
       </footer>

    )
}
