import React from 'react'
import Container from 'react-bootstrap/esm/Container'

function AppFooter() {
  return (
    <Container fluid className="alert  text-center mt-5 bg-secondary">
        <div className='copyright text-center'>&copy; 2024 MaconShope. Tous droits réservés. |
             <a href="#droit" className='text-warning'>Droits des utilisateurs</a>
        </div>
        <div className='socials justify-center mt-4'>
            <ul className='d-flex justify-content-center list-style-type: none '>
                 <a href='https://www.facebook.com' className='p-2'><i className="fab fa-facebook-f text-warning"></i></a>
                 <a href='https://www.twitter.com' className='p-2'><i className="fab fa-twitter text-warning"></i></a>
                 <a href='https://www.linkedin.com' className='p-2'><i className="fab fa-linkedin-in text-warning"></i></a>
            </ul>
        </div>
    </Container>
  )
}

export default AppFooter