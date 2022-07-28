import React from "react";
import { Col, Row, Image } from "react-bootstrap";

export const ImageGallery = ({ images }) => {
  return (
    <Row size={12} md={8} className="image-shine">
      <Col lg={4} md={12} className="mb-4">
        <figure className="mb-4">
          <Image rounded src={images[0].src} fluid />
        </figure>
        <figure className="mb-4">
          <Image rounded src={images[1].src} fluid />
        </figure>
      </Col>

      <Col lg={4} md={6} className="mb-4">
        <figure className="mb-4">
          <Image rounded src={images[2].src} fluid />
        </figure>
        <figure className="mb-4">
          <Image rounded src={images[3].src} fluid />
        </figure>
      </Col>

      <Col lg={4} md={6} className="mb-4">
        <figure className="mb-4">
          <Image rounded src={images[4].src} fluid />
        </figure>
        <figure className="mb-4">
          <Image rounded src={images[5].src} fluid />
        </figure>
      </Col>
    </Row>
  );
};
