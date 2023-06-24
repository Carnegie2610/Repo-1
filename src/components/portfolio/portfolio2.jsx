import React { useEffect, useState } from 'react';
import axios from 'axios';
import './portfolio.css';

const Portfolio = () => {

    return (
        <section id="portfolio">
          <h5>My recent work</h5>
          <h2>Portfolio</h2>
    <ListPortfolio/>  
          <div className="container portfolio__container">
          {
            portfolioContent.map((content, id) =>{
              return (
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item__image">
                    <img src={content.image} alt=" one" className="portImage" />
                  </div>
                  <h3> {content.title} </h3>
                  <div className="portfolio__item__cta">
                    <a
                      href={content.github}
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
              );
            }
            
            )
          }
          </div>
        </section>
      );
    };
    export default Portfolio;
    
}