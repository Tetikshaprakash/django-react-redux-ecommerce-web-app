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

export default function SignupScreen() {
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");
  const [show, changeshow] = useState("fa fa-eye-slash");

  const submitHandler = (e) => {
    e.preventDefault();

    if (pass1 != pass2) {
      setError("Password don't match");
      navigate("/signup");
    } else if (!validPassword.test(pass1)) {
      setError("Invalid Password");
    } else {
      setError("Signup success");
    }
  };

  const showPassword = () => {
    var x = document.getElementById("pass1");
    var z = document.getElementById("pass2");
    if (x.type == "password" && z.type == "password") {
      x.type = "text";
      z.type = "text";
      changeshow("fa fa-eye");
    } else {
      x.type = "password";
      z.type = "password";
      changeshow("fa fa-eye.slash");
    }
  };
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Card>
              <Card.Header as="h2" className="text-center bg-black text-light">
                Signup
              </Card.Header>
            </Card>
            <Card.Body>
              {error && <Message variant="danger">{error}</Message>}
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="fname">
                  <Form.Label>
                    <span>
                      <i class="fa-regular fa-user"></i>
                    </span>
                    First Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lname">
                  <Form.Label>
                    <span>
                      <i class="fa-regular fa-user"></i>
                    </span>
                    Last Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    required
                  />
                </Form.Group>

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

                <Form.Group className="mb-3">
                  <Form.Label>
                    {" "}
                    <span>
                      <i className={show}></i>
                    </span>{" "}
                    Confirm Password
                  </Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Checkbox onClick={showPassword} />{" "}
                    <Form.Control
                      placeholder="Enter your Password"
                      required
                      type="password"
                      value={pass2}
                      onChange={(e) => setPass2(e.target.value)}
                      id="pass2"
                    />
                  </InputGroup>
                </Form.Group>

                <br />
                <div className=" d-grid gap-2">
                  <Button className="btn btn-md btn-success" type="submit">
                    {" "}
                    Signup{" "}
                  </Button>
                </div>
              </Form>
              <Row className="py-3">
                <Col>
                  Already User?
                  <Link to="/login">Login </Link>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </>
  );
}
