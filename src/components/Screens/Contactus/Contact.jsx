import React from "react";
import '../Contactus/Contact.css'

import { FaTwitter } from "react-icons/fa";
const Contact = () => {
  return (
    <>
    <h1 className="common-heading">Contact Us</h1>
    <div className="loc">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d438827.70937106706!2d76.618071!3d30.764994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb5987fd7233%3A0x2292f0a39e7605a5!2s27%2C%20Khanpur%2C%20Punjab%20140301%2C%20India!5e0!3m2!1sen!2sus!4v1671684515231!5m2!1sen!2sus" width="80%" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                
    </div>
    <div className="main rscp">
        <div className="main-1">
            <div className="box">
                        <h3>We would love to hear from you.</h3>
                                <p>If you’ve got great products your making or looking to work with us then drop us a line.</p>
                        <div className="container">
                                <form action="#" method="POST">
                                <label htmlFor="first">Name <span className="star">*</span></label>
                                <br />
                                <div className="name">

                                <div>
                                <input type="text" id="first" name="first" autoComplete="off" required /><br />
                                <span className="low"> First</span>
                                </div>
                                <div>

                                <input type="text" name="last" autoComplete="off" required /><br />
                                <span className="low"> Last</span>
                                </div>
                                </div>



                                <br />
                                <label htmlFor="email">Email <span className="star">*</span></label>
                                <br />
                                <input type="email" id="email" name="email" autoComplete="off" required />
                                <br />
                                <label className="name" htmlFor="messae">Comment or Message</label>
                                
                                <textarea name="message" id="message" cols="80" rows="6" required></textarea>
                                <br />
                                <button className="frm-btn" type="submit">SUBMIT</button>
                            </form>
                        </div>
            </div>
            <div className="box">
                    <h4>Address</h4>
                    <p>27, Ambika Green Avenue, Kharar, Mohali, Punjab, India 140301</p>
                    <h4>Infomation</h4>
                    <p>+91 6203285323 </p>
                    <p>contact@stunhaul.com</p>
            </div>
        </div>
    </div>


    <div className="rs main">
        <div className="">
            <div className="box">
                    <h4>Address</h4>
                    <p>27, Ambika Green Avenue, Kharar, Mohali, Punjab, India 140301</p>
                    <h4>Infomation</h4>
                    <p>+91 6203285323 </p>
                    <p>contact@stunhaul.com</p>
            </div>
            <div className="box">
                        <h3>We would love to hear from you.</h3>
                                <p>If you’ve got great products your making or looking to work with us then drop us a line.</p>
                        <div className="container">
                                <form action="#" method="POST">
                                <label htmlFor="first">Name <span className="star">*</span></label>
                                <br />
                                <div className="name">

                                <div>
                                <input type="text" id="first" name="first" autoComplete="off" required /><br />
                                <span> First</span>
                                </div>
                                <div>

                                <input type="text" name="last" autoComplete="off" required /><br />
                                <span> Last</span>
                                </div>
                                </div>



                                <br />
                                <label htmlFor="email">Email <span className="star">*</span></label><br />
                                <input type="email" id="email" name="email" autoComplete="off" required />
                                <br />
                                <label className="name" htmlFor="messae">Comment or Message</label>
                                
                                <textarea name="message" id="message" cols="80" rows="6" required></textarea>
                                <br />
                                <button className="frm-btn" type="submit">SUBMIT</button>
                            </form>
                        </div>
            </div>
        </div>
    </div>
    </>
  );
};
export default Contact;