import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col } from "react-bootstrap";
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiReact } from "react-icons/si";
import { TbBrandCss3, TbBrandFigma, TbBrandHtml5, TbBrandJavascript, TbBrandTailwind } from "react-icons/tb";
import { IoLogoAndroid } from "react-icons/io";

const SkillsBox = () => (
  <div className="skill-bx wow zoomIn">
    <h2>Skills</h2>
    <p className="proficient">Proficient</p>
    <Container className="iconSkills">
      <Row xs={4}>
        <Col>
          <TbBrandFigma className="icons" />
        </Col>
        <Col>
          <SiAdobephotoshop className="icons" />
        </Col>
        <Col>
          <SiAdobeillustrator className="icons" />
        </Col>
        <Col>
          <SiAdobexd className="icons" />
        </Col>
      </Row>

      <p className="learning">Learning</p>
      <Row xs={3} md={6}>
        <Col className="icons">
          <SiReact className="icons" />
        </Col>
        <Col className="icons">
          <TbBrandJavascript className="icons" />
        </Col>
        <Col className="icons">
          <TbBrandCss3 className="icons" />
        </Col>
        <Col className="icons">
          <TbBrandHtml5 className="icons" />
        </Col>
        <Col className="icons">
          <TbBrandTailwind className="icons" />
        </Col>
        <Col className="icons">
          <IoLogoAndroid className="icons" />
        </Col>
      </Row>
    </Container>
  </div>
);

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row xs={1} md={2}>
          <Col>
            <SkillsBox />
          </Col>
          <Col>
            <Container className="skillsText">
              <Row>
                <p>
                  I'm currently working towards my Master's in Creative Digital Media & UX. Looking for junior design positions.
                  <br />
                  For my final project I'm using React Native, CSS3 and Figma.
                </p>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
