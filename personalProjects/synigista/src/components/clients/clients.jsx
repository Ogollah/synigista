import React from 'react';
import Client2 from "../../assets/img/clients/client-2.png";
import Client3 from "../../assets/img/clients/client-3.png";
import Itech from "../../assets/img/clients/itech.png";
import Logo from "../../assets/img/log.png";

function Clients() {
  return (
    <section id="clients" class="clients section-bg">
    <div class="container">

      <div class="row" data-aos="zoom-in">

        <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img src={Logo} class="img-fluid" alt=""/>
        </div>

        <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img src={Client2} class="img-fluid" alt=""/>
        </div>

        <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img src={Client3} class="img-fluid" alt=""/>
        </div>

        <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img src={Itech}  class="img-fluid" alt=""/>
        </div>

      </div>

    </div>
  </section>
  )
}

export default Clients
