import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Card,
  Container,
  InputGroup,
} from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Message"; // adjust path based on your folder structure
import { validEmail, validPassword } from "./Regex";

export default function LoginScreen() {
  const navigate = useNavigate();
 
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [error, setError] = useState("");
  const [show, changeshow] = useState("fa fa-eye-slash");
  

  const submitHandler = (e) => {
    e.preventDefault();

  };
  const showPassword = () => {
    var x = document.getElementById("pass1");
   
    if (x.type == "password") {
      x.type = "text";
      changeshow("fa fa-eye");
    } else {
      x.type = "password";
      changeshow("fa fa-eye.slash");
    }
  }
  return (
    <>
      <Container className="mt-3">
        <br />
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Card>
              <Card.Header as="h2" className="text-center bg-black text-light">
                Login
              </Card.Header>
            </Card>
            <Card.Body>
              {error && <Message variant="danger">{error}</Message>}
              <Form onSubmit={submitHandler}>
                

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>
                    <span>
                      <i class="fa-solid fa-envelope"></i>
                    </span>
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    {" "}
                    <span>
                      <i className={show}></i>
                    </span>
                    Password
                  </Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Checkbox onClick={showPassword} />{" "}
                    <Form.Control
                      placeholder="Enter your Password"
                      required
                      type="password"
                      value={pass1}
                      onChange={(e) => setPass1(e.target.value)}
                      id="pass1"
                    />
                  </InputGroup>
                </Form.Group>

                
                <br />
                <div className=" d-grid gap-2">
                  <Button className="btn btn-md btn-success" type="submit">
                    {" "}
                    Login{" "}
                  </Button>
                </div>
              </Form>
              <Row className="py-3">
                <Col>
                  New User?
                  <Link to="/signup">Signup</Link>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </>
  );
}
