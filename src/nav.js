import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NaviBar() {
    return (
      <div className="nav-container">
          <span className="menu material-icons">menu</span>
          <header>FOR ALL THE MOODS</header>
          <span className="profile material-icons">account_circle</span>
      <Navbar expand="lg" className="nav-container">
        <Container className='me-auto'>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <Nav.Link href="/">HOME PAGE</Nav.Link>
              <Nav.Link href="/Quiz">QUIZ</Nav.Link>
              <Nav.Link href="/Review">REVIEW</Nav.Link>
              <Nav.Link href="/Mood">MOOD</Nav.Link>
              <Nav.Link href="/Eg_mood">MOOD EXAMPLE</Nav.Link>
              <Nav.Link href="/Signup">SIGN-UP</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
  }
  
  // export default naviBar;