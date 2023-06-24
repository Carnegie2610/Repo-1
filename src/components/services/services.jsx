import React from 'react'
import './services.css'
import ListServices from './listServices'
import{BsCheck} from 'react-icons/bs'


export const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <ListServices />
        <article className="service">
          <div className="service__head">
            <h3>UI/UX design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>this is the first second service I can offer</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>this is the second service I can offer</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>this is the thirth service I can offer</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>this is the fourth service I can offer</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>this is the first second service I can offer</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>this is the second service I can offer</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>this is the thirth service I can offer</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>this is the fourth service I can offer</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>this is the first second service I can offer</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>this is the second service I can offer</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>this is the thirth service I can offer</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>this is the fourth service I can offer</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
export default Services;