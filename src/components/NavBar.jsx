import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { BiSun, BiMoon } from 'react-icons/bi';
import useTheme from '../theme/useTheme';

function NaBar( {theme,toggleTheme} ) {
    const [newTheme, toggleNewTheme ] = useTheme()
    return (
        <Navbar expand="lg" className="navbar-bg mb-3">
        <Container>
            <Navbar.Brand href="/" className='fw-bold'>Logo name</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link className='nav-link fw-bold' to="/">Home</Link>
                    <Link className='nav-link fw-bold' to="/about">About</Link>
                    <Link className='nav-link fw-bold' to="/contact">Contact</Link>
                </Nav>
                <Nav className="ms-auto">
                    <Link className='nav-link' >
                        <button className='toggleTheme ' onClick={toggleNewTheme}>
                            {newTheme === 'light' ? <BiMoon /> : <BiSun />}
                        </button>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NaBar;