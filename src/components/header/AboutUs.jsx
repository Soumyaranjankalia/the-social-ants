import React from "react";
import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <div className="aboutUs-Container">
      <div className="aboutUs-one">
        <div className="aboutUs-header">
          <h2>About US</h2>
        </div>
        <div className="aboutUs-bar">
          <div style={{width:"4px",height:'4px',background:"#2b1055",borderRadius:'50%'}}></div>
          <div style={{width:"4px",height:'4px',background:"#2b1055",borderRadius:'50%'}}></div>
          <div style={{width:"4px",height:'4px',background:"#2b1055",borderRadius:'50%'}}></div>
          <div className="line"></div>
        </div>
        <div className="aboutUs-des">
          <p>
            AT THE SOCIAL ANTS, WE'RE NOT JUST A CREATIVE DIGITAL MARKETING AND
            BRANDING AGENCY—WE'RE A BUSTLING COLONY OF PASSIONATE INDIVIDUALS
            DEDICATED TO REDEFINING HOW BRANDS CONNECT WITH THE WORLD. LIKE OUR
            NAMESAKE SUGGESTS, WE MAY BE SMALL IN SIZE, BUT OUR COLLECTIVE DRIVE
            AND CREATIVITY PACK A POWERFUL PUNCH.
          </p>
        </div>
      </div>
      <div className="aboutUs-two">
        <a>
            <span>Know More</span>
            <svg
              aria-hidden="true"
              class="e-font-icon-svg e-far-arrow-alt-circle-right"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              style={{width:'15px',height:"15px",marginBottom:'1px'}}
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path>
            </svg>
        </a>
      </div>
      <div className="AboutUs-three">
        <div className="ourPhilosophy">
          <div className="philosophyDiv">
            <div className="philosophyLogo">
              <svg
                aria-hidden="true"
                class="elementkit-infobox-icon e-font-icon-svg e-fab-think-peaks"
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M465.4 409.4l87.1-150.2-32-.3-55.1 95L259.2 0 23 407.4l32 .3L259.2 55.6zm-355.3-44.1h32.1l117.4-202.5L463 511.9l32.5.1-235.8-404.6z"></path>
              </svg>
            </div>
          </div>
          <div className="philosophyDetails">
            <h3>Our Philosophy</h3>
            <p>
              {" "}
              We believe in the power of big ideas. From concept to completion,
              we believe in personalizing every project to meet the needs and
              goals of our clients. Whether creating a brand from scratch or
              reimagining an existing brand, we love challenges
            </p>
            <div className="readMore">
              <a href="">Read More</a>
            </div>
          </div>
        </div>
        <div className="ourApproach">
          <div className="philosophyDiv">
            <div className="philosophyLogo">
              <svg
                aria-hidden="true"
                class="elementkit-infobox-icon e-font-icon-svg e-fab-think-peaks"
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M465.4 409.4l87.1-150.2-32-.3-55.1 95L259.2 0 23 407.4l32 .3L259.2 55.6zm-355.3-44.1h32.1l117.4-202.5L463 511.9l32.5.1-235.8-404.6z"></path>
              </svg>
            </div>
          </div>
          <div className="philosophyDetails">
            <h3>Our Approach</h3>
            <p>
              {" "}
              By creating immersive campaigns that foster solid brand-audience relationships, we go beyond traditional advertising. Our innovative, genuine, and quirky tactics thrive in the ever-changing digital environment.
            </p>
            <div className="readMore">
              <a href="">Read More</a>
            </div>
          </div>
        </div>
        <div className="ourExpertise">
          <div className="philosophyDiv">
            <div className="philosophyLogo">
              <svg
                aria-hidden="true"
                class="elementkit-infobox-icon e-font-icon-svg e-fab-think-peaks"
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M465.4 409.4l87.1-150.2-32-.3-55.1 95L259.2 0 23 407.4l32 .3L259.2 55.6zm-355.3-44.1h32.1l117.4-202.5L463 511.9l32.5.1-235.8-404.6z"></path>
              </svg>
            </div>
          </div>
          <div className="philosophyDetails">
            <h3>Our Expertise</h3>
            <p>
              {" "}
              From social media strategies to SEO mastery, from captivating graphic design to compelling content creation, our team boasts a diverse skill set to elevate your brand and keep it ahead of the competition.
            </p>
            <div className="readMore">
              <a href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
