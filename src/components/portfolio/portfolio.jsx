import React from "react";
import "./portfolio.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";
import ListPortfolio from "./listPortfolio";

export const Portfolio = () => {
  const portfolioContent = [
    {
      image : img1,
      youtube: 'https://github.com',
      demo: 'https://www.youtube.com/watch?v=dmogGUovW8c',
      id: 1,
      title:'COMPILING AND EXECUTION'
    },
    {
      image : img2,
      github: 'https://github.com',
      demo: 'https://www.youtube.com/watch?v=sw-SiYySO9w',
      id: 2,
      title:'IMPLEMENTATION OF A LINKED LIST IN C PROGRAMING'
    },
    {
      image : img3,
      github: 'https://github.com',
      demo: 'https://www.youtube.com/watch?v=mvjw8JAS8fw',
      id: 4,
      title:'TUTORIAL CREATING A LINKED LIST OF STUDENT'
    },
    {
      image : img5,
      github: 'https://github.com',
      demo: 'https://www.youtube.com/watch?v=80rl3gkCG-A',
      id: 5,
      title:'PRESENTATION OF A CHAINED LIST'
    },
  ]
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
