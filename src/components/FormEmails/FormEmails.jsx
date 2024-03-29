import { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Notification from "../Notification/Notification";
import axios from "../../utils/axios";
import "../FormEmails/FormEmails.css";

function FormEmails() {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    variant: "",
    message: "",
  });
  const { register, handleSubmit, reset } = useForm();
  const { isEnglish } = useContext(LanguageContext);

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
    <div className="container-emails" id="Contact">
      <Card className="mt-5 mx-auto card" data-aos="fade-right">
        <Card.Body>
          <Form onSubmit={handleSubmit(submit)}>
            <h1 className="title-form">{isEnglish ? "Contact" : "Contacto"}</h1>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>{isEnglish ? "Name" : "Nombre"}</Form.Label>
                  <Form.Control
                    className="custom-placeholder"
                    placeholder="John Doe"
                    {...register("name")}
                    required={true}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>{isEnglish ? "Phone" : "Teléfono"}</Form.Label>
                  <Form.Control
                    type="tel"
                    pattern="[0-9]*"
                    className="custom-placeholder"
                    placeholder="123456789"
                    {...register("phone")}
                    required={true}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>
                {isEnglish ? "Email" : "Correo electrónico"}
              </Form.Label>
              <Form.Control
                type="email"
                className="custom-placeholder"
                placeholder={
                  isEnglish ? "name@example.com" : "nombre@ejemplo.com"
                }
                {...register("email")}
                required={true}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>{isEnglish ? "Message" : "Mensaje"}</Form.Label>
              <Form.Control
                as="textarea"
                className="custom-placeholder"
                placeholder={
                  isEnglish
                    ? "Hello! I would like to have an interview with you..."
                    : "¡Hola! Me gustaría tener una entrevista contigo..."
                }
                {...register("message")}
                required={true}
              />
            </Form.Group>
            <div className="button">
              <button className="button-submit" type="submit">
                {isEnglish ? "Submit" : "Enviar"}
              </button>
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
