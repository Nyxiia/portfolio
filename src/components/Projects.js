import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
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
                      <Nav.Link eventKey="second">Other Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item role={"button"}>
                      <Nav.Link eventKey="third">Foxxy Forest</Nav.Link>
                    </Nav.Item>
                    <Nav.Item role={"button"}>
                      <Nav.Link eventKey="fourth">Costumes</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <p>Bordr is my thesis project, I am currently in the process of releasing it on the Google Play Store.</p>
                      <p>
                        I designed and developed the mobile application Bordr from the ground up, utilizing React, React Native, Expo, and Figma. The app allows users to find new friends by location
                        for board games or by selecting "online" to play video games together. Through competitor and user research, I incorporated user-centered design principles and techniques to
                        create a unique and engaging user experience.
                      </p>
                      <p>The video below is a screen recording of the current state of the app in an Android phone.</p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <a
                          className="connect-btn"
                          href="https://www.figma.com/proto/k3xbEUwmBF3BJhhJIimAzt/Bordr?page-id=0%3A1&node-id=245%3A228&viewport=241%2C48%2C0.28&scaling=scale-down&starting-point-node-id=11%3A9"
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          Figma Prototype
                        </a>

                        <a rel="noreferrer" className="connect-btn" href="https://www.behance.net/gallery/149189779/Bordr-Meeting-App" target={"_blank"}>
                          Find more Info!
                        </a>
                      </div>
                      <div className="youtube-container">
                        <iframe
                          title="bordr video"
                          frameborder="0"
                          scrolling="no"
                          marginheight="0"
                          marginwidth="0"
                          width="600.19"
                          height="600"
                          type="text/html"
                          src="https://www.youtube.com/embed/_jrC4McrBO8?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd1080&origin=http://youtubeembedcode.com"
                        ></iframe>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div>
                        <p>
                          In my most recent project I was tasked with developing a design solution in Figma to address the issue of multinational tech companies' complex approval processes for
                          accounts payables, specifically bill payments.
                        </p>
                        <p>
                          I researched competitors' fintech designs and followed some of those guidelines while making it more visually appealing for a mobile app. The design aimed to be familiar to
                          users and focused on ease of use, providing an at-a-glance display of data on the home page. The "Approvals" page allows users to select requests and perform bulk actions or
                          automatically approve payments in the "Automate" tab, making it easier for users to manage payments that don't require the CEO's attention.
                        </p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <a
                            className="connect-btn"
                            href="https://www.figma.com/proto/9roIFo7vRxpg5XNDTHcPni/Light-design-challenge?node-id=0%3A1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A325"
                            target={"_blank"}
                            rel="noreferrer"
                          >
                            Figma Prototype
                          </a>

                          <a className="connect-btn" rel="noreferrer" href="https://www.behance.net/gallery/165342737/UXUI-FinTech-Exploration?" target={"_blank"}>
                            Find more Info!
                          </a>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>
                        Foxxy Forest is an Android game made with Unity. This project was made during my second semester of my Masters. <br /> Used C#, Illustrator and Aseprite.
                      </p>
                      <div className="youtube-container">
                        <iframe
                          title="youtube video"
                          frameBorder="0"
                          scrolling="no"
                          marginHeight="0"
                          marginWidth="0"
                          width="900"
                          height="600"
                          type="text/html"
                          src="https://www.youtube.com/embed/AYwF3d_4fhE?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com"
                        ></iframe>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <p>Apart from designing products,, I love making costumes and drawing! This is a selection of what I've done previously.</p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className="mb-4"
                      >
                        <a className="connect-btn" href="https://marblaydesign.art/" rel="noreferrer" target={"_blank"}>
                          Costume Portfolio
                        </a>
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
