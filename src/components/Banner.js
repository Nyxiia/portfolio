import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/catstronaut.svg";
import { BoxArrowInRight } from "react-bootstrap-icons";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = ["Designer", "UI/UX Student", "Creative"];
  const period = 2500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className={"animate__animated animate__fadeIn"}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{`Hi, I'm Mar!`} </h1>
              <h1>
                <span className="txt-rotate" dataperiod="3000" data-rotate='[ "Designer", "UI/UX Student", "Creative" ]'>
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>I am a recent graduate in product and UX design with a background in costume design and customer support, with experience in React, React Native, HTML, CSS, and Figma.</p>
              <a href="https://drive.google.com/file/d/1V28F5J0cl6sokr_NXZumGNMAHcpUttvo/view?usp=sharing" rel="noreferrer" target="_blank" style={{ color: "white", textDecoration: "none" }}>
                Check out my CV <BoxArrowInRight size={30} style={{ marginTop: "-5" }} />
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className={"animate__animated animate__zoomIn"}>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
