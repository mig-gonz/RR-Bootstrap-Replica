import { Navbar, Nav, Button } from "react-bootstrap";

function MyNav() {
  const sticky = {
    position: "fixed",
    width: "100%",
  };

  return (
    <Navbar bg="light" expand="lg" style={sticky}>
      <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
        <img
          src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg"
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav style={{ padding: "24px 40px 20px 40px" }}>
          <Nav.Link href="#LogIn">Log In</Nav.Link>
          <Button variant="success">Sign Up</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNav;
