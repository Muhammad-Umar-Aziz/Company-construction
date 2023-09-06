import React from "react";
import { Card } from "react-bootstrap";

const BlogBasicCard = ({ imageSrc, title, dateCategory, description }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="rounded-0">
        <img src={imageSrc} className="img-fluid" alt={title} />
        <Card.Body>
          <Card.Title
            style={{ fontFamily: "Rubik", fontWeight: "700", fontSize: "18px" }}
            className="text-center text-md-start"
          >
            {title}
          </Card.Title>
          <Card.Text>
            <p
              style={{
                color: "rgba(201, 201, 201, 1)",
                fontFamily: "Open Sans",
                fontSize: "14px",
                fontWeight: "400",
              }}
              className="text-center text-md-start"
            >
              {dateCategory}
            </p>
            <p
              style={{
                color: "rgba(102, 102, 102, 1)",
                fontFamily: "Open Sans",
                fontSize: "14px",
                fontWeight: "600",
              }}
              className="text-center text-md-start"
            >
              {description}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogBasicCard;
