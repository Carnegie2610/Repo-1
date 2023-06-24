import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './portfolio.css';

const Portfolio = () => {

    return (
        <section id="portfolio">
          <h5>My recent work</h5>
          <h2>Portfolio</h2> 
          <div className="container portfolio__container">
          
            {data.map(({id,image,title,github,demo}) => (
              
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-img">
                    <img src={image} alt="title" />
                  </div>
                  <h3> {title} </h3>
                  <div className="portfolio__item-cta">
                    <a
                      href={github}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href={content.demo}
                      className="btn btn-primary"
                      target="blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </article>
              ))}
            
            
           
          </div>
        </section>
      );
            };
    export default Portfolio;
    
