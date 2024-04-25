import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import zomato from '../images/zomato.avif';

function HomeHeader() {
    return (
        <>
            <Navbar className="bg-transparent text-white p">
                <Container>
                    {/* <Navbar.Brand href="#home" className='text-white'>Navbar with text</Navbar.Brand> */}
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#action1" className='me-5'>Add restaurant</Nav.Link>

                        <Nav.Link href="#action1" className='me-5'>Login</Nav.Link>
                        <Nav.Link href="#action2">Sign up</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className='d-flex justify-content-center pt-5'>
                <img className='w-25 pt-5 img-fluid' src={zomato} alt="" />
            </div>
            <div className='text-center fs-1 text-white py-5 '>Find the best restaurants, <br></br > cafés and bars in India
            </div>
        </>
    )

}

export default HomeHeader