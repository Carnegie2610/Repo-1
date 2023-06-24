import React from 'react'
import './portfolio.css'
import  { useEffect, useState } from 'react';
import axios from 'axios';


function Portfolio() {
  const url=process.env.REACT_APP_API_URL
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);
  // const avatars = [AVT1, ];

  useEffect(() => {
    axios
      .get(`$https://good-newt-uniform.cyclic.app/api/portfolio`)
      .then(res => {
        setData(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [url]);
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>
      <div className="container portfolio__container">
      {loading ? (
          <p>Loading...</p>
        ) : (
          data.map(({id,Image,title, github, demo})=>{
            return(
              <article  key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
               <img src={`${url}/${Image}`} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' rel='noopener'>Livedemo</a>
              </div>
            </article>
  
            )
          })
        )}

      
        

       
        
        
        </div> 
    </section>
  )
}

export default Portfolio