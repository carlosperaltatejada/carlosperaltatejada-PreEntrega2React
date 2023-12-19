import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Link to="/"> <Logo /> </Link>
                    <Nav className="me-auto">
                        <Link to="/" className='pestaña'>&nbsp;  Inicio &nbsp; </Link>
                        <Link to="/category/entradas">Entradas &nbsp; </Link>
                        <Link to="/category/fuertes">Platos fuertes &nbsp; </Link>
                        <Link to="/category/bebidas">Bebidas &nbsp; </Link>
                        <Link to="/category/postres">Postres</Link>
                    </Nav>
                    <Link to="/cart">  <CartWidget/> </Link>
            </Container>
        </Navbar>
        </>
    )
}

export default NavBar 
