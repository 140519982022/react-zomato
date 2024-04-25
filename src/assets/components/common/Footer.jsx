import footerZomato from '../../images/blackZomato.avif'

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import '../../css/footer.css';

import appStoreFooter from '../../images/app-footer.webp';
import googlePlayFooter from '../../images/googlePlayFooter.webp';
import indiaImg from '../../images/in.webp'

import { FaLinkedin } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";


function Footer() {
    return (
        <>

            <div className="">
                <div className="container-fluid p-3 bg-secondary-subtle text-secondary-emphasis">
                    <div className="container">
                        <div className="row py-4">
                            <div className="col-md-6">
                                <img src={footerZomato} alt="footer logo" />

                            </div>

                            <div className="col-md-6 d-flex justify-content-end">
                                <DropdownButton id="dropdown-item-button" title={<span><img src={indiaImg} className='w-25 me-2' alt="" /> India</span>} className='me-3 ' variant="secondary">
                                    <Dropdown.ItemText>India</Dropdown.ItemText>
                                    <Dropdown.Item as="button">Action</Dropdown.Item>
                                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                                </DropdownButton>
                                <DropdownButton id="dropdown-item-button" title={<span><TbWorld/> English</span>} variant="secondary">
                                    <Dropdown.ItemText>English</Dropdown.ItemText>
                                    <Dropdown.Item as="button">Action</Dropdown.Item>
                                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                                </DropdownButton>

                            </div>

                        </div>

                        <div className='row pt-3'>
                            <div className='col'>

                                <ul className='lh-lg'>
                                    <h6>ABOUT ZOMATO</h6>
                                    <li>

                                        <a href="" className=''>Who We Are</a>
                                    </li>

                                    <li>
                                        <a href="" className=''>Blog</a>
                                    </li>
                                    <li>

                                        <a href="">Work With Us</a>
                                    </li>
                                    <li>
                                        <a href="">Investor Relations</a></li>
                                    <li>
                                        <a href="">Report Fraud</a>
                                    </li>
                                    <li>
                                        <a href="">Press Kit</a>
                                    </li>
                                    <li>

                                        <a href="">Contact Us</a>


                                    </li>
                                </ul>
                            </div>
                            <div className='col'>
                                <ul className='lh-lg'>
                                    <h6>ZOMAVERSE</h6>
                                    <li>

                                        <a href="" className=''>Zomato</a>
                                    </li>

                                    <li>
                                        <a href="" className=''>Blinkit</a>
                                    </li>
                                    <li>

                                        <a href="">Feeding India</a>
                                    </li>
                                    <li>
                                        <a href="">Hyperpure</a></li>
                                    <li>
                                        <a href="">Zomaland</a>
                                    </li>

                                </ul>


                            </div>
                            <div className='col'>
                                <ul className='lh-lg'>
                                    <h6>FOR RESTAURANTS</h6>
                                    <li>

                                        <a href="" className=''>Partner With Us</a>
                                    </li>

                                    <li>
                                        <a href="" className=''>Apps For You</a>
                                    </li>


                                </ul>

                            </div>
                            <div className='col'>
                                <ul className='lh-lg'>
                                    <h6>LEARN MORE</h6>
                                    <li>

                                        <a href="" className=''>Privacy</a>
                                    </li>

                                    <li>
                                        <a href="" className=''>Security</a>
                                    </li>
                                    <li>

                                        <a href="" className=''>Terms</a>
                                    </li>

                                    <li>
                                        <a href="" className=''>Sitemap</a>
                                    </li>


                                </ul>

                            </div>
                            <div className='col'>
                                <ul className='lh-lg'>
                                    <h6>SOCIAL LINKS</h6>
                                    <li className='d-flex '>

                                        <a href="" className='me-3 fs-5 text-dark'><FaLinkedin /></a>
                                        <a href="" className='me-3 fs-5 text-dark'><FaInstagramSquare /></a>
                                        <a href="" className='me-3 fs-5 text-dark'><FaTwitterSquare /></a>
                                        <a href="" className='me-3 fs-5 text-dark'><FaYoutube /></a>
                                        <a href="" className='me-3 fs-5 text-dark'><FaFacebook /></a>


                                    </li>

                                    <li className='d-flex footerImg py-3'>

                                        <img src={appStoreFooter} className='me-2 ' alt="" />
                                        <img src={googlePlayFooter} className='me-2' alt="" />



                                    </li>



                                </ul>

                            </div>
                        </div>
                        <hr/>
                        <p className='py-3'>
                        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
                        </p>

                    </div>
                    

                </div>


            </div>



        </>
    )

}

export default Footer