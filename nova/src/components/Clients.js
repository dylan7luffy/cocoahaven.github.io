import React from 'react';
import './Css/Clients.css';

const Clients = () => {
    return (

            <section class="bg-light py-5 py-xl-6">
                <div class="container mb-5 mb-md-6">
                    <div class="row justify-content-md-center">
                        <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
                            <h2 class="mb-4 display-5">Clients</h2>
                            <p class="text-secondary mb-4 mb-md-5"></p>
                            <hr class="w-50 mx-auto mb-0 text-secondary"/>
                        </div>
                    </div>
                </div>
            <div class="container">
                <div class="row d-flex align-items-center">
                    <div class="col-12 col-md-3 mx-auto text-center">
                        <img class="img-fluid rounded rounded-circle mb-4" loading="lazy"  alt="" />
                    </div>
                </div>
            </div>

            </section>
    );
};

export default Clients;