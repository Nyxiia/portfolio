import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { Divider } from "./Divider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const contactSchema = yup.object({
  name: yup.string().required("Name is required!"),
  email: yup.string().email("Hey, that's not an email").required("Email is required!"),
  message: yup.string().required("Message is required, let me know what you want!"),
});
export const Contact = () => {
  const form = useRef();

  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(contactSchema) });

  const onSubmit = async (data) => {
    setButtonText("Sending...");
    const response = await emailjs.sendForm("service_8nkejip", "3ynhqz7", form.current, "Nq8wD5js0m7VtfKil");
    setButtonText("Send");
    setFormDetails(formInitialDetails);
    if (response.status === 200) {
      toast.dark("Got your message! Be back to you ASAP 🥳");
    } else {
      toast.error("Something went wrong 🤨 - want to give it another go?");
    }
  };

  return (
    <section className="contact" id="connect">
      <Divider style={{ marginTop: "-80px" }} />
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" {...register("name")} defaultValue={formDetails.firstName} name="name" placeholder="Name" />
                    {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" {...register("email")} defaultValue={formDetails.email} name="email" placeholder="Email Address" className={errors.email && "invalid"} />
                    {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea rows="6" {...register("message")} defaultValue={formDetails.message} name="message" placeholder="Message"></textarea>

                    <button type="submit" className="connect-btn">
                      <span>{buttonText}</span>
                    </button>
                    {errors.message && <span style={{ marginLeft: 2, color: "red" }}>{errors.message.message}</span>}
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </section>
  );
};
