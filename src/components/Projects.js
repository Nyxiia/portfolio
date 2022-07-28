import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import { Divider } from "./Divider";
import { ImageGallery } from "./ImageGallery";

export const Projects = () => {
  return (
    <>
      <section className="project" id="projects">
        <Divider style={{ marginTop: "-80px" }} />

        <Container>
          <Row>
            <Col size={12}>
              <div className={"animate__animated animate__fadeIn"}>
                <h2>Projects</h2>
                <p>Have a look at my current and previous work!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item role={"button"}>
                      <Nav.Link eventKey="first">Bordr</Nav.Link>
                    </Nav.Item>
                    <Nav.Item role={"button"}>
                      <Nav.Link eventKey="second">Foxxy Forest</Nav.Link>
                    </Nav.Item>
                    <Nav.Item role={"button"}>
                      <Nav.Link eventKey="third">Costumes</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <p>Bordr is my thesis project, WIP. It's a meeting app for boardgame and videogame players that wish to find new friends to play new games.</p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <button className="connect-btn">
                          <a
                            href="https://www.figma.com/proto/k3xbEUwmBF3BJhhJIimAzt/Bordr?page-id=0%3A1&node-id=245%3A228&viewport=241%2C48%2C0.28&scaling=scale-down&starting-point-node-id=11%3A9"
                            target={"_blank"}
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            Figma Prototype
                          </a>
                        </button>
                        <button className="connect-btn">
                          <a href="https://www.behance.net/gallery/149189779/Bordr-Meeting-App" target={"_blank"} style={{ color: "white", textDecoration: "none" }}>
                            Find more Info!{" "}
                          </a>
                        </button>
                      </div>
                      <div className="figma">
                        <iframe
                          title="figma"
                          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                          width="1300"
                          height="900"
                          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fk3xbEUwmBF3BJhhJIimAzt%2FBordr%3Fpage-id%3D0%253A1%26node-id%3D11%253A9%26viewport%3D214%252C346%252C0.18%26scaling%3Dscale-down%26starting-point-node-id%3D11%253A9%26hide-ui%3D1"
                          allowFullScreen
                        />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>
                        Foxxy Forest is an Android game made with Unity. This project was made during my second semester of my Master's. <br /> Used C#, Illustrator and Aseprite.
                      </p>
                      <div className="youtube-container">
                        <iframe
                          title="youtube video"
                          frameBorder="0"
                          scrolling="no"
                          marginHeight="0"
                          marginWidth="0"
                          width="788.54"
                          height="443"
                          type="text/html"
                          src="https://www.youtube.com/embed/AYwF3d_4fhE?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com"
                        ></iframe>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Apart from coding, I love making Costumes and drawing! This is a selection of what I've done previously.</p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className="mb-4"
                      >
                        <button className="connect-btn">
                          <a href="https://marblaydesign.art/" target={"_blank"} style={{ color: "white", textDecoration: "none" }}>
                            Costume Portfolio
                          </a>
                        </button>
                      </div>
                      <div>
                        <ImageGallery
                          images={[
                            { src: "https://marblaydesign.art/static/media/12.b5fd2614.jpg" },
                            { src: "https://marblaydesign.art/static/media/2.f35839f0.jpg" },
                            { src: "https://marblaydesign.art/static/media/6.1f953eda.jpg" },
                            { src: "https://marblaydesign.art/static/media/10.3d002faa.jpg" },
                            { src: "https://marblaydesign.art/static/media/3.fb5f83e6.jpg" },
                            { src: "https://marblaydesign.art/static/media/2.cbac64d6.jpg" },
                          ]}
                        />
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
