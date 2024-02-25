import {
  Container,
  Nav,
  Navbar,
  Form,
  Offcanvas,
  Button,
} from "react-bootstrap/";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { About } from "../../Pages/About";
import { Login } from "../../Pages/Login";
import { Track } from "../../Pages/Track";
import { Home } from "../../Pages/Home";
import { Flower2 } from "react-bootstrap-icons";

function NavBarComp() {
  return (
    <Router>
      <Navbar
        bg="secondary"
        data-bs-theme="secondary"
        expand="sm"
        className="shadow"
        sticky="top"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="text-primary fw-bold fs-3">
            <Flower2 className="display-5 brand-logo" /> Bolossom
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                Bolossom
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to={"/"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to={"/track"}>
                  Track Order
                </Nav.Link>
                <Nav.Link as={Link} to={"/login"}>
                  Login
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 w-50"
                  aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/track" element={<Track />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default NavBarComp;
