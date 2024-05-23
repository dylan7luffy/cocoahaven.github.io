import React from 'react';
import './Css/Services.css';
import one from '../images/1.svg';
import two from '../images/2.svg';
import three from '../images/3.svg';
import four from '../images/4.svg';
import five from '../images/5.svg';
import six from '../images/6.svg';


const Services = () => {
    return (
        <section id='services' className="services py-5 py-xl-6" >
            <div className="container mb-5 mb-md-6">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
                        <div className="mb-4 display-5">Welcome to Cocoa Haven!</div>
                        <div className="mb-4 display-5">Here's the Process</div>
                        <p className="text-secondary mb-4 mb-md-5"></p>
                        <hr className="w-50 mx-auto mb-0 text-secondary"/>
                    </div>
                </div>
            </div>
            <div className="container overflow-hidden">
                <div className="row gy-5 gy-md-6 gx-xl-6">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="text-center">
                            <img src={one} alt="Step 1" width="400" height="400" className="mb-4" />                   
                            <p className=" " style={{color:"#2d1c14", fontSize:"35px", }}>Bean Sourcing</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="text-center">
                            <img src={two} alt="Step 2" width="400" height="400" className="mb-4" />
                            <p className=" " style={{color:"#2d1c14", fontSize:"35px", }}>Roasting</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="text-center">
                            <img src={four} alt="Step 3" width="400" height="400" className="mb-4" />
                            <p className=" " style={{color:"#2d1c14", fontSize:"35px", }}>Winnowing</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="text-center">
                            <img src={five} alt="Step 4" width="400" height="400" className="mb-4" />
                            <p className=" " style={{color:"#2d1c14", fontSize:"35px", }}>Refinement</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="text-center">
                            <img src={three} alt="Step 5" width="400" height="400" className="mb-4" />
                            <p className=" " style={{color:"#2d1c14", fontSize:"35px", }}>Tempering</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="text-center">
                            <img src={six} alt="Step 6" width="400" height="400" className="mb-4" />
                            <p className=" " style={{color:"#2d1c14", fontSize:"35px", }}>Distribution</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
