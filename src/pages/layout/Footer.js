import React from "react";
import { Container, Row, Col, Navbar, NavbarBrand } from "reactstrap";

const FooterPage = () => {
  return (
    <footer style={{ backgroundColor: "#f8f9fa", padding: "20px 0", marginTop: "auto" }}>
      <Container>
        <Row>
          <Col className="text-center">
            <Navbar light expand="md">
              <NavbarBrand href="/">© 2024 My Website</NavbarBrand>
            </Navbar>
            <p style={{ fontSize: "14px" }}>
              Designed with ❤️ by Your Name
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterPage;
