import {Link} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';
import BrandLogo from '../Assets/favicon.svg';
import '../Styles/Navigation.scss';

function Navigation() {
    
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Toggle/>
                <Link to="/" className="navbar-brand mx-3 d-sm-block d-md-block d-lg-none"><img src={BrandLogo} alt="ORG" className="navbarLogo"/></Link>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                    <Nav>
                        <Link to="/" className="nav-link navbarLinks">Home</Link>
                        <Link to="/" className="navbar-brand mx-3 d-none d-lg-block"><img src={BrandLogo} alt="ORG" className="navbarLogo"/></Link>
                        <Link to="/About" className="nav-link navbarLinks">About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;