import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F10%2F48%2FOmj10e.jpg&f=1&nofb=1"
            alt="First slide"
          />
          <Carousel.Caption className="mt-5">
            <h3>We create your website</h3>
            <p>Expert in WordPress and WooCommerce</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.imgur.com%2FHM67xoT.jpg&f=1&nofb=1"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>We create your website</h3>
            <p>Expert in WordPress and WooCommerce</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F24%2F37%2FK4wNkq.jpg&f=1&nofb=1"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>We create your website</h3>
            <p>Expert in WordPress and WooCommerce</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
