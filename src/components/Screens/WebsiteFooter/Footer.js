import React from "react";
import styled from "styled-components";
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
    <Wrapper className="mt-20 ">
      
     <div className="footer ">
      <footer>
   
        <div className="container grid grid-four-column" style={{marginLeft:"40px"}}>
        <div className="footer-about">
                    <p style={{fontWeight:"600" , fontSize:"0.875rem" , lineHeight:"1.25rem", marginBottom:"20px"}}>FIND IT FAST</p>
                    <p className="text-gray-400 hover-underline-animation" style={{marginTop:"10px"}}><a href=""> About Us </a></p>
                    <p className="text-gray-400 hover-underline-animation" style={{marginTop:"10px"}}><a href=""> Top Searches</a></p>
                    <p className="text-gray-400 hover-underline-animation" style={{marginTop:"10px"}}><a href=""> Privacy Policy</a> </p>
                    <p className="text-gray-400 hover-underline-animation" style={{marginTop:"10px"}}><a href=""> Terms and Conditoins </a></p>
                    <p className="text-gray-400 hover-underline-animation" style={{marginTop:"10px"}}><a href=""> Refund Policy</a></p>
                </div>

          {/* 2nd column */}
  
          <div className=" footer-customer-care" >
                    <p style={{fontWeight:"600" , fontSize:"0.875rem" , lineHeight:"1.25rem", marginBottom:"20px"}}>CONSTOMER CARE</p>
                    <p className="text-gray-400 hover-underline-animation" style={{marginTop:"10px"}}><a href=""> My Account</a></p>
                    <p className="text-gray-400 hover-underline-animation" style={{marginTop:"10px"}}><a href=""> Track Order</a></p>
                    <p className="text-gray-400 hover-underline-animation" style={{marginTop:"10px"}}><a href=""> Shop</a> </p>
                    <p className="text-gray-400 hover-underline-animation" style={{marginTop:"10px"}}><a href=""> Wishlist</a></p>
                    <p className="text-gray-400 hover-underline-animation" style={{marginTop:"10px"}}><a href=""> Return/Exchange</a></p>
          </div>

          {/* 3rs column  */}
          

          <div className=" footer-other-business" >
          <p className="text-sm font-semibold" style={{marginBottom:"20px"}}>OTHER BUSINESS</p>
                    <p className="text-gray-400 hover-underline-animation" style={{marginTop:"10px"}}><a href=""> Partnership Programs</a></p>
                    <p className="text-gray-400 hover-underline-animation" style={{marginTop:"10px"}}><a href=""> For Shopkeeper</a></p>
          </div>


<div className=" footer-newsletter">
          <p className="text-sm font-semibold" style={{marginBottom:"20px"}}>NEWSLETTER</p>
                    <form action="#">
                        <input type="email" required autoComplete="off" placeholder="" />
                        <button className="btn"><span><FaArrowRight className="icons" /> </span></button>
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
          <div className=" grid grid-two-column">
            <p>
              @{new Date().getFullYear()} StunHaul. All Rights Reserved.
            </p>
          <div className="footer-social--icons ">
                        <div>
                            <img src="https://minimog.thememove.com/wp-content/uploads/2021/11/payment.png" title="" alt=""/>
                        </div>
                        
                        
                    </div>
          </div>
        </div>
        
        </footer>

    

    <ul className="nav">
        <div className="footer_responsive_1">
            <p>FIND IT FAST </p>
            <div className="li_1">


                <ul>
                    <li><a href="#">The About Us</a></li>
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
                        <button className="btn"><span><FaArrowRight className="icons" /> </span></button>
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
            <div className="">
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
    </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

//gloabal css

*{
  margin: 0;
  padding: 0;
  font-family: 'Work Sans', sans-serif;
 }
html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

.hover-underline-animation:hover {
    display: inline-block;
    position: relative;
    text-align: left;
  }

  
  .hover-underline-animation:after {
    content: '';
    position: absolute;
    width: 50%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #000000;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  
  .hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  } 



a {
  text-decoration: none;
}



// .container {
//   max-width: 120rem;
//   margin: 0 auto;
// }

.grid {
  display: grid;
  gap: 7rem;


  padding:0rem 2rem;
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
    height:0rem;
    color: black;
    padding: 1.6rem 2.4rem;
    border: 2px solid black;
    // text-transform: uppercase;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
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
        // gap: 3.2rem;
      }
      

      .grid-two-column, .grid-three-column, .grid-four-column{
        grid-template-columns: 1fr;
      }
}










// .footer-social--icons {
//   display: flex;
//   gap: 2rem;
  
// }
// .footer-social--icons div .icons{
  
//       color:black;
//       font-size: 1rem;
//       position: relative;
//       cursor: pointer;
    
// }
// .footer-social--icons div{

//     font-weight: 400;
//     padding: 1rem;
//     border-radius: 50%;


    
// }
  a:hover{
    color:black;
    text-decoration:none;
  }



  
  footer,.nav {
    font-weight: 200;
    // padding: 3rem 0 9rem 0;
    background-color:white;

    .footer-social--icons {
      display: flex;
      gap: 2rem;
    //   padding-top:20px;

      div {
        font-weight: 400;
        padding: 1rem;
        border-radius: 50%;
        // border: 2px solidblack;

        .icons {
            // gap:1rem;
          color:black;
          font-size: 1.5rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    hr {
      margin-top:3rem;
      margin-bottom: 1rem;
      color:red;
      color: #ffffff;
      height: 0.1px;
    }
    .footer-bottom--section {
      padding-bottom: 1.3rem;



        border:2ps solid red;
      
    }

    
  }








  .btn{
    margin-left: -40px;
    background: none;
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
    //   padding-top: 3.2rem;
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
.footer{
    // position:absolute;
    // bottom:0;
    }
`;

export default Footer;
