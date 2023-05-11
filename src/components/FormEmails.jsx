import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import LoadingScreen from "./LoadingScreen";
import Notification from ".//Notification";
import axios from "../utils/axios";
import '../assets/styles/FormEmails.css';

function FormEmails() {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    variant: "",
    message: "",
  });
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    setIsLoading(true);
    axios
      .post("/emails/contact", data)
      .then(() => {
        setNotification({
          show: true,
          variant: "success",
          message: "Message sent!",
        });
        reset();
      })
      .catch(() =>
        setNotification({
          show: true,
          variant: "danger",
          message: "There was an error",
        })
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="container-emails">
      <Card className="mt-5 mx-auto card">
        <Card.Body >
          <Form onSubmit={handleSubmit(submit)}>
            <h1  id='Contact' >Contact</h1>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control placeholder="John Doe" {...register("name")} required={true}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="123456789"
                    {...register("phone")}
                    required={true}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                {...register("email")}
                required={true}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="¡Hola! Me gustaría tener una entrevista contigo..."
                {...register("message")}
                required={true}
              />
            </Form.Group>
            <div className="button">
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </div>
           
          </Form>
        </Card.Body>
      </Card>
      {isLoading && <LoadingScreen />}
      <Notification
        {...notification}
        handleClose={() => setNotification({ ...notification, show: false })}
      />
    </div>
  );
}

export default FormEmails;
