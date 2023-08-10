import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpg'
import IMG3 from '../../assests/portfolio3.jpg'
import IMG4 from '../../assests/portfolio4.jpg'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Titulo numero 1',
    github: 'https://github.com',
    demo: 'https://react-icons.github.io/react-icons/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Titulo numero 2',
    github: 'https://github.com',
    demo: 'https://react-icons.github.io/react-icons/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Titulo numero 3',
    github: 'https://github.com',
    demo: 'https://react-icons.github.io/react-icons/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Titulo numero 4',
    github: 'https://github.com',
    demo: 'https://react-icons.github.io/react-icons/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Titulo numero 5',
    github: 'https://github.com',
    demo: 'https://react-icons.github.io/react-icons/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Titulo numero 6',
    github: 'https://github.com',
    demo: 'https://react-icons.github.io/react-icons/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          		<div className="portfolio__item-image">
            		<img src={image} alt={title} />
          		</div>
          		<h3>{title}</h3>
          		<div className="portfolio__item-cta">
          			<a href={github} className='btn' target='_blank'>Github</a>
          			<a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          		</div>
        			</article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio