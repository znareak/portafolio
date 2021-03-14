import React from "react";
import Navbar from "./Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Layout({ dir, children }) {
  const flexDir = dir || "flex-row";
  return (
    <>
      <Row className=" m-0">
        <Col className="p-0 m-0" md={4} lg={3}>
          <Navbar />
        </Col>
        <Col className="p-0 m-0" md={12} lg={9}>
          <Container
            className={`d-flex ${flexDir} justify-content-center align-items-center px-lg-5 px-1 vh-100`}
            style={{ overflowY: "auto" }}
          >
            {children}
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default React.memo(Layout);
