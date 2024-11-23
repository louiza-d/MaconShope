import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

var heroData =[
    {
        id: 1,
        image: require('../assets/images/img10.jpg'),
        title: 'Outils de Base',
        description: 'Tout ce dont vous avez besoin pour les travaux de maçonnerie'
    },

    {
        id: 2,
        image: require('../assets/images/img8.jpg'),
        title: 'Équipement de Pointe',
        description: 'Des outils de qualité pour des résultats professionnels'
    },

    {
        id: 3,
        image: require('../assets/images/img9.jpg'),
        title: 'Protection et Sécurité',
        description: 'Équipement de protection pour assurer la sécurité sur le chantier'
    }
]

function AppHero() {
  return (
    <section id='home' className='hero-block'>
         <Carousel>
            {
                heroData.map(hero => {
                   return (
                    <Carousel.Item key={hero.id}>
                    <img
                        className='d-block w-100'
                        src={hero.image}
                        alt={"Slide"+ hero.id}
                    />

                    <Carousel.Caption>
                      <h3>{hero.title}</h3>
                      <p>{hero.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                   )
                })
            }

         </Carousel>
    </section>
  )
}

export default AppHero