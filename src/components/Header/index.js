import React from "react";
import { Link } from "react-router-dom";
import { Flex, Spacer, Box, Button, HStack } from "@chakra-ui/react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <div dir="rtl">
      <Box
        border="1px"
        fontSize="14px"
        fontWeight="semibold"
        borderColor="#ccd0d5"
        padding="1%"
      >
        <Flex>
          <Box>وجهتي</Box>
          <Spacer />

          <Box display="flex" justifyContent="space-between">
            <HStack spacing="24px">
              <Link to="/"> الرئيسية </Link>
              <Link to="/destinations"> الوجهات </Link>
              <Link to="/dayInYourCity"> يوم في مدينتك </Link>
              <Link to="/userDestinations"> وجهات المستخدمين </Link>
              <Link to="/destinations"> ارشادات السفر </Link>
              <Button colorScheme="blue" variant="solid">
                تسجيل الدخول
              </Button>
              <Button colorScheme="blue" variant="outline">
                التسجيل
              </Button>
            </HStack>
          </Box>
        </Flex>
      </Box>

      {/* <Navbar bg="light" style={{ background: "white", height: "90px" }}>
        <Container>
          <Navbar.Brand>وجهتي</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/"> الرئيسية </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/destinations"> الوجهات </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/dayInYourCity"> يوم في مدينتك </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/userDestinations"> وجهات المستخدمين </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/destinations"> ارشادات السفر </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </div>
  );
}
