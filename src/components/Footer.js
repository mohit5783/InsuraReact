import { Col, Row } from "antd";
import { Footer as Foot } from "antd/es/layout/layout";
import { ReactComponent as LogoImage } from "../images/zurich-logo-blue.svg";
import {
  FaStackOverflow,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaPhone,
  FaBriefcase,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Foot style={{ marginTop: 50 }}>
      <Row justify="space-between">
        <Col
          flex={12}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <LogoImage />
        </Col>
        <Col
          flex={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            color: "#CCC",
            fontSize: 30,
          }}
        >
          <Row justify="space-between">
            <Col>
              <a href="https://iamohit.com">
                <FaBriefcase title="Get to know me more" />
              </a>
            </Col>
            <Col>
              <a href="tel:+60183553290">
                <FaPhone title="Call Mohit K Srivastava, reponse 99%" />
              </a>
            </Col>
            <Col>
              <a href="https://stackoverflow.com/users/3796048/mohit-shrivastava">
                <FaStackOverflow title="Problem solving attitude can be viewed here." />
              </a>
            </Col>
            <Col>
              <a href="https://www.linkedin.com/in/mohit5783">
                <FaLinkedin title="Mohit's LinkedIn profile, to showcase my professional career and education." />
              </a>
            </Col>
            <Col>
              <a href="https://github.com/mohit5783/">
                <FaGithub title="Not all my repository are public, please get in touch to know more about Mohit" />
              </a>
            </Col>
            <Col>
              <a href="https://twitter.com/mohit5783">
                <FaTwitter title="This is not where I could be found, Its just an account." />
              </a>
            </Col>
            <Col>
              <a href="https://www.facebook.com/mohit.shrivastava.technocrat">
                <FaFacebookF title="Socially active, lazy with commenting and posting. Just view what friend does" />
              </a>
            </Col>
            <Col>
              <a href="https://wa.link/yx7qep">
                <FaWhatsapp title="Best form to get in touch with me. Just say hello" />
              </a>
            </Col>
            <Col>
              <a href="https://www.instagram.com/mohit5783/">
                <FaInstagram title="Mohit K Srivastava's Insta account" />
              </a>
            </Col>
            <Col>
              <a href="https://www.youtube.com/c/MohitShrivastavaMohit">
                <FaYoutube title="Youtube account for Mohit. Sooner you will watch videos from me." />
              </a>
            </Col>
            <Col>
              <a href="https://www.pinterest.com/mohit5783">
                <FaPinterestP title="Mohit's Pin" />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <p className="CopyRightText">
        © {new Date().getFullYear()} - developed by Mohit K Srivastava
      </p>
    </Foot>
  );
};

export default Footer;
