import React from "react";
import { CardGroup, Card } from "react-bootstrap";

const Landing = () => {
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://picsum.photos/id/1024/1920/1280"
          />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://picsum.photos/id/1025/1920/1280"
          />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://picsum.photos/id/553/1920/1280"
          />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export { Landing };
