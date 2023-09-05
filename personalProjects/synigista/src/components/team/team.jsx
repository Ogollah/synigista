import React from 'react';
import Male from "../../assets/img/profile/maleprofile.png";
import FeMale from "../../assets/img/profile/profilefemale.png";

function Team() {
  return (
    <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Core Team</h2>
          <p>Our team is made up experienced individuals with ability to serve al your needs.</p>
        </div>

        <div class="row">

          <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src={Male} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Stephen Owuonda</h4>
                <span>Chief Executive Officer</span>
                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src={FeMale} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>Manages our products with passion and dedication. Ensures the results are attained.</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src={Male} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Antony Ojwang</h4>
                <span>CTO</span>
                <p>Provides overall technical leadership and guidance for all the technical and non technical in the organization.</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src={Male} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Makombe Kennedy</h4>
                <span>Software Engineering Lead</span>
                <p>With over 10 years as a software engineer Kenney brings experience and leadership that is unmatched in the field.</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Team
