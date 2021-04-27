import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useHistory } from 'react-router'

const PostTemplate = (props) => {
  const { data: { images, alt, title, description, deployedUrl, repo, name, id }, handler, type } = props || {};
  const browserHistory = useHistory()

  function editAddHandler(id, type) {
    console.log(props)
    let url = `/edit-add/${id}?type=${type}`
    browserHistory.push(url)

  }
  return (
    <Card>
      <Card.Img variant="top" src={images} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <h5 className="postedby">posted by {name}</h5>
        {type &&
          <Row>
            <Col xs={6} sm={6} md={6}>
              <Button variant="info" onClick={() => editAddHandler(id, type)}>Edit</Button>
            </Col>
            <Col xs={6} sm={6} md={6} className="text-right">
              <Button variant="danger" onClick={() => handler(id, type)}>Delete</Button>
            </Col>
          </Row>
        }
        {!type &&
          <Row>
            <Col xs={12} sm={12} md={12} className="text-center">
              <Button variant="info" className="hoverbtb logoutbtn" href="mailto:abc@example.com">
                  Message
              </Button>
            </Col>
          </Row>
        }
      </Card.Body>
    </Card>
  );
};

export default PostTemplate;
