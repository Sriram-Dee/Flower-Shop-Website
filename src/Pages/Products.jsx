import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const flowers = [
  {
    id: 1,
    name: "Eternal Elegance",
    description:
      "A timeless arrangement of roses and lilies exuding sophistication and grace.",
    rate: "$50",
    source: "flower.png",
  },
  {
    id: 2,
    name: "Sunny Serenade",
    description:
      "Bright and cheerful sunflowers paired with daisies, spreading joy and warmth.",
    rate: "$45",
    source: "flower1.png",
  },
  {
    id: 3,
    name: "Enchanting Orchids",
    description:
      "Exotic orchids in a stunning display, captivating with their beauty and allure.",
    rate: "$60",
    source: "flower2.png",
  },
  {
    id: 4,
    name: "Whispers of Romance",
    description:
      "Soft pastel roses and baby's breath whispering tales of love and affection.",
    rate: "$55",
    source: "flower3.png",
  },
  {
    id: 5,
    name: "Radiant Blooms",
    description:
      "Vibrant assortment of assorted blooms bursting with color and energy.",
    rate: "$40",
    source: "flower4.png",
  },
  {
    id: 6,
    name: "Tranquil Zen Garden",
    description:
      "A serene blend of bamboo, lilies, and greenery evoking a sense of peace and harmony.",
    rate: "$65",
    source: "flower5.png",
  },
  {
    id: 7,
    name: "Blissful Blossoms",
    description:
      "Delicate cherry blossoms delicately arranged to inspire serenity and joy.",
    rate: "$50",
    source: "flower6.png",
  },
];

function CardTemplet() {}

export const Products = () => {
  return (
    <section id="products">
      <Container className="my-5">
        <p className="display-6 fw-semibold text-primary text-center">
          Products
        </p>
        <Row className="p-md-5">
          {flowers.map((flower, index) => (
            <Col md={6} lg={4} className="p-3">
              <Card key={index}>
                <Card.Img variant="top" src={flower.source} />
                <Card.Body>
                  <Card.Title>{flower.name}</Card.Title>
                  <Card.Text>{flower.description}</Card.Text>
                  <div className="d-flex justify-content-between pt-2">
                    <h5>
                      MRP:{" "}
                      <span className="text-info fw-bold fs-4">
                        {flower.rate}
                      </span>
                    </h5>
                    <Button variant="info text-light">Buy Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
