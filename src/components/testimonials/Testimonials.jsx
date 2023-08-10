/*import React from 'react'*/
import './testimonials.css'
import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'

import React, { useRef, useState } from 'react';

// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'


const data = [
  {
    avatar: AVTR1,
    name : 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error molestiae, saepe est architecto ab voluptas a totam cum et minus cumque labore, mollitia tempore iure. Quas in unde minus odio voluptates exercitationem cupiditate non sequi nihil modi mollitia ducimus voluptatem, ipsa dicta optio voluptas, facilis debitis eligendi dolorum ea architecto.',
  },
  {
    avatar: AVTR2,
    name : 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error molestiae, saepe est architecto ab voluptas a totam cum et minus cumque labore, mollitia tempore iure. Quas in unde minus odio voluptates exercitationem cupiditate non sequi nihil modi mollitia ducimus voluptatem, ipsa dicta optio voluptas, facilis debitis eligendi dolorum ea architecto.',
  },
  {
    avatar: AVTR3,
    name : 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error molestiae, saepe est architecto ab voluptas a totam cum et minus cumque labore, mollitia tempore iure. Quas in unde minus odio voluptates exercitationem cupiditate non sequi nihil modi mollitia ducimus voluptatem, ipsa dicta optio voluptas, facilis debitis eligendi dolorum ea architecto.',
  },
  {
    avatar: AVTR4,
    name : 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error molestiae, saepe est architecto ab voluptas a totam cum et minus cumque labore, mollitia tempore iure. Quas in unde minus odio voluptates exercitationem cupiditate non sequi nihil modi mollitia ducimus voluptatem, ipsa dicta optio voluptas, facilis debitis eligendi dolorum ea architecto.',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
			>
        
        {
          
          data.map(({avatar, name, review}, index) => {
            return (
              
              <SwiperSlide key={index} className="testimonial">
          			<div className="client__avatar">
            		<img src={avatar} />
          			</div>
            		<h5 className="client__name">{name}</h5>
            			<small className="client__review">{review}  		
            			</small>
        			</SwiperSlide>
              
              
            )
          })
        }
        
      </Swiper>
      
    </section>
  )
}

export default Testimonials