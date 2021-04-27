import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useHistory } from 'react-router'
import { getPostData } from '../../src/utils/Posts'
const PostTemplate = (props) => {
  const { 
    data: { img, alt, title, description, deployedUrl, repo, name, id, imageUrl }, 
    handler, 
    type 
  } = props || {};
  const browserHistory = useHistory()
  const [getData, setData] = useState({})

  function editAddHandler(id, type) {
    // console.log(props);
    let url = `/edit-add/${id}?type=${type}`;
    browserHistory.push(url);
  }
  useEffect(() => {
    let data = getPostData('userTabel')
    if (data) {
      setData(data[0])
    }


  }, [])

  return (
    <Card>
      <Card.Img variant="top" src={imageUrl && imageUrl[0] && imageUrl[0].data_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        {getData && getData.firstName && getData.firstName &&
          <h5 className="postedby">posted by {getData.firstName + ' ' + getData.lastName}</h5>
        }
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
              <Button variant="info" className="hoverbtb logoutbtn" href="mailto:gabrieljose3135@gmail.com">
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