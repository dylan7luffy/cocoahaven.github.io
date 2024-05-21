import React, { useState } from 'react';
import './Css/About.css';
import { Container, Row, Col } from 'react-bootstrap';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

const About = () => {
    const [selectedBullet, setSelectedBullet] = useState(1);

    const handleClick = (bulletNumber) => {
        setSelectedBullet(selectedBullet === bulletNumber ? 0 : bulletNumber);
    };

    return (
        <section className="about" id="about">
            <Container>
                <h3></h3>

                <p>
                </p>
                <p>
                </p>
                <p>
                </p>
                <p>
                </p>
                <p>
                   
                </p>
            </Container>
        </section>
    );
};

export default About;
