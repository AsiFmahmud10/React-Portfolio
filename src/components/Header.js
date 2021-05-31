import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-scroll'
import { useEffect, useState } from 'react';

const Header = () => {
  const color = ['white','#fd5e53']
    const [navStyle , setNavStyle]= useState(color[0])
  useEffect(() => {
    console.log('i am rendering')
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
             console.log("> 56")
             setNavStyle(color[1])
        } else {
          console.log("<56")
          setNavStyle(color[0])
        }
    })
}, []);

    return ( 
      <Navbar 
            fixed="top" bg="" variant='light' expand="md" style={{background:'white',boxShadow:`1px 1px 2px -2px ${navStyle}`}}>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="ml-auto " >
          <Nav.Link  >
                <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
          </Nav.Link>

          <Nav.Link href="#about">
                <Link activeClass="active" to="about" spy={true} smooth={true}>About</Link>
          </Nav.Link>
          <Nav.Link href="#about">
                <Link activeClass="active" to="project" spy={true} smooth={true}>Projects</Link>
          </Nav.Link>
          <Nav.Link href="#about">
                <Link activeClass="active" to="skill" spy={true} smooth={true}>Skills</Link>
          </Nav.Link>

   

        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
     );
}
 
export default Header;