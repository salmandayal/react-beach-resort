import React, { useState } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

const Services = () => {
    // eslint-disable-next-line no-unused-vars
    const [services, setServices] = useState([
        {
            icon: <FaCocktail />,
            title: 'free cocktails',
            info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, omnis!'
        },
        {
            icon: <FaHiking />,
            title: 'Endless Hiking',
            info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, omnis!'
        }, {
            icon: <FaShuttleVan />,
            title: 'Free Shuttle',
            info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, omnis!'
        }, {
            icon: <FaBeer />,
            title: 'Strongest Beer',
            info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, omnis!'
        },
    ]);
    return (
        <section className='services'>
            <Title title='services' />
            <div className="services-center">
                {services.map(service => {
                    return (
                        <article key={`item-${service.title}`} className='service'>
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    )
}

export default Services
