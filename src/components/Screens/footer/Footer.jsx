import React from "react";
import styled from "styled-components";
// import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";

// import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper>
      
      {/* footer section  */}
      <footer>
   
        <div className="container grid grid-four-column">
        <div className="footer-about">
                    <h3>FIND IT FIRST</h3>
                    <p><a href=""> About Us </a></p>
                    <p><a href=""> Top Searches</a></p>
                    <p><a href=""> Privacy Policy</a> </p>
                    <p><a href=""> Terms and Conditoins </a></p>
                    <p><a href=""> Refund Policy</a></p>
                </div>

          {/* 2nd column */}
  
          <div className=" footer-customer-care">
          <h3>CONSTOMER CARE</h3>
                    <p><a href=""> My Account</a></p>
                    <p><a href=""> Track Order</a></p>
                    <p><a href=""> Shop</a> </p>
                    <p><a href=""> Wishlist</a></p>
                    <p><a href=""> Return/Exchange</a></p>
          </div>

          {/* 3rs column  */}
          

          <div className=" footer-other-business">
          <h3>OTHER BUSINESS</h3>
                    <p><a href=""> Partnership Programs</a></p>
                    <p><a href=""> For Shopkeeper</a></p>
          </div>


<div className=" footer-newsletter">
          <h3>NEWSLETTER</h3>
                    <form action="#">
                    <input type="email" required autoComplete="off" placeholder="" />
                                <button className="btn"><span><FaArrowRight className="icons arrow" /></span></button>
                    </form>
                    <p>*By Signing Up here i agree to receive Miniger's email newsletter</p>
                    <div className="footer-social--icons">
                        <div>
                            <a href="https://www.youtube.com/" >
                                <FaPinterestP className="icons" />
                                
                            </a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/" >
                                <FaFacebookF className="icons" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/" >
                                <FaInstagram className="icons" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/" >
                                <FaTwitter className="icons" />
                            </a>
                        </div>
                    </div>
          </div>
        </div>

          <hr />
        <div className="footer-bottom--section">
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} StunHaul. All Rights Reserved.
            </p>
          <div className="footer-social--icons">
                        <div>
                            <img src="https://minimog.thememove.com/wp-content/uploads/2021/11/payment.png" title="" alt=""/>
                        </div>
                        
                        
                    </div>
          </div>
        </div>
        
        </footer>

    

    <ul className="nav">
        <div className="footer_responsive_1">
            <p >FIND IT FIRST </p>
            <div className="li_1">


                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Top Searches</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms and Conditoins</a></li>
                    <li><a href="#">Refund Policy</a></li>

                </ul>

            </div>
        </div>

        <div className="footer_responsive_2">
            <p>CONSTOMER CARE</p>
            <div className="li_2">
            <ul>
                <li><a href="#">My Account</a></li>
                <li><a href="#">Track Order</a></li>

                <li><a href="#">Shop</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Return/Exchange</a></li>
            </ul>
            </div>
        </div>
        <div className="footer_responsive_3">
        <p>OTHER BUSINESS</p>
            <div className="li_3">
                
                <ul>
                    <li><a href="#">Partnership Programs</a></li>
                    <li><a href="#">For Shopkeeper</a></li>
                </ul>
            </div>
    
        </div>

            <div className="footer_responsive_4">
                <p>NEWSLETTER
                </p>
                <div className="li_4">
                <ul>
                    <li><a href="#">
                            <form action="#">
                                <input type="email" required autoComplete="off" placeholder="" />
                                <button className="btn"><span><FaArrowRight className="icons arrow" /></span></button>
                            </form>
                        </a></li>
                    <li><a href="#">
                            <p>*By Signing Up here i agree to receive Miniger's email newsletter</p>
                        </a></li>
                    <li><a href="#">
                            <div className="footer-social--icons">
                            <div>
                            <a href="https://www.youtube.com/" >
                                <FaPinterestP className="icons" />
                                
                            </a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/" >
                                <FaFacebookF className="icons" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/" >
                                <FaInstagram className="icons" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/" >
                                <FaTwitter className="icons" />
                            </a>
                        </div>
                            </div>
                        </a></li>

                </ul>
                </div>
            </div>
            <hr />
          <div className="footer-bottom--section">
            <div className="container grid grid-two-column">
              <p>
                @{new Date().getFullYear()} StunHaul. All Rights Reserved.
              </p>
            <div className="footer-social--icons">
                          <div>
                              <img src="https://minimog.thememove.com/wp-content/uploads/2021/11/payment.png" title="" alt=""/>
                          </div>
                          
                          
                      </div>
            </div>
          </div>
        
    </ul>
  
    </Wrapper>
  );
};

const Wrapper = styled.section`

//gloabal css

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
 }
html {
  font-size: 50.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}





body::-webkit-scrollbar-thumb {
 
    background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}
  

  h3 {
  font-size: 1.3rem;
  font-weight: 400;
}

p {
  color: rgb(24 24 29);
  opacity: .7;
  font-size: 0.5rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight:400;
}

a {
  text-decoration: none;
}



.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}
.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1fr 1fr 2.5fr ;
}

 

    input, textarea{  
      border-radius:5rem;
      width:20rem;
    max-width: 50rem;
    color: black;
    padding: 0.5rem 2rem;
    border: 1px solid rgba(98, 84, 243, 0.5);
    text-transform: uppercase;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: rgb(98 84 243);
    color:white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1rem;
    cursor: pointer;
    }


/* ===========================================
/* media queries  
======================================= */
/* px  */
/* rem  */
/* em  */
/* 1500px */

//998px
@media (max-width:998px) {
      .container{
        padding: 0 3.2rem;
      }

        .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
}

@media (max-width:    768px) {

      html{
        font-size: 50%;
      }

      .grid{
        gap: 3.2rem;
      }

      .grid-two-column, .grid-three-column, .grid-four-column{
        grid-template-columns: 1fr;
      }
}
















.footer-social--icons {
  display: flex;
  gap: 3rem;

  
}
.footer-social--icons div .icons{
  
      color:black;
      font-size: 2.0rem;
      position: relative;
      cursor: pointer;
    
}
.footer-social--icons div{

    font-weight: 400;
    padding: 1rem;
    border-radius: 50%;


    
}
  a{
    color:inherit;
    text-decoration:none;
  }



  
  footer,.nav {
    font-weight: 700;
    padding: 6rem 0 9rem 0;
    background-color:white;

    h3 {
      font-weight: 700;
      color: black;
      margin-bottom: 2.4rem;
    }
    p {
      font-weight: 600;

      // color:black;
    }
    .footer-social--icons {
      display: flex;
      gap: 3rem;

      div {
        font-weight: 400;
        padding: 1rem;
        border-radius: 50%;
        // border: 2px solidblack;

        .icons {
          color:black;
          font-size: 2.0rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    hr {
      margin-top:4rem;
      margin-bottom: 2rem;
      color:red;
      color: #ffffff;
      height: 0.1px;
    }
    .footer-bottom--section {
      padding-top: 4rem;

      
    }
    
  }








  .btn{
    margin-top: 00px;
    // background: none;
    border: 0px;
  }
  






  @media (max-width: 768px) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
      .nav{
        
        display:block;
      }
      footer{
        display:none;
      }
    }
    
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }

  }





  .dropdown.open .caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-bottom: 4px dashed;
    border-top: 0px solid transparent;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}




.nav{
 
  display:none;
  font-size:2rem;
  
}
.nav p{
  
    font-size:2rem;
  
  
}
.nav li{
  padding:4px;
}
@media only screen and (max-width: 800px) {
  .nav{
    display:block;
  }
  footer{
    display:none;
  }
}
.footer_responsive_1:hover .li_1{
  display: block;
}
.footer_responsive_2:hover .li_2{
  display: block;
}
.footer_responsive_3:hover .li_3{
  display: block;
}
.footer_responsive_4:hover .li_4{
  display: block;
}
.li_1,.li_2,.li_3,.li_4{
  display: none;
}
p{
  font-size:.8rem;
}
.nav p{
  font-style:none;
  font-size:1.0rem;
}
ul li{
  font-size:.9rem;
}
.btn  {
  display:absolute;
  // margin-top: -200px;
  margin-left:290px;
  color:black;
  background:none;
}
.arrow {
  display:absolute;
  margin-top: -53px;
  // margin-left:290px;
  color:black;
  background:none;
}
`;

export default Footer;
