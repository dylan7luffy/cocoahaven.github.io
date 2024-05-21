import React from "react";
import './Css/Team.css';
import { Container, Row, Col } from 'react-bootstrap';
import waterImage from '../images/water.jpg';
import PaytonImage from '../images/payton.jpg'; 
import { useEffect } from 'react';


const Team = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <header
                className="header text-white text-center py-5"
                style={{ backgroundImage: `url(${waterImage})` }}
            >
                <div className="container">
                    <div className="header-content">
                        <h1>Our Team</h1>


                    </div>
                </div>
            </header>
            <section className="team" id="team">
           
           

            <Container>
                    <Row>
                    <p></p>
                <h2></h2>
                    <Col md={6} className="bullet-points">
                    
                                <p>
                            </p>
                            <p>
                            </p>
                            <p>
                            </p>
                            <p>
                            </p>
                      
                    
                    </Col>
                    
                    </Row>
                  
                        


            </Container>
              
        </section>
        </>
    );
};

export default Team;