import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useHistory } from 'react-router'

const PostTemplate = (props) => {
  const { data: { img, alt, title, description, deployedUrl, repo, name, id }, handler } = props || {};
  const browserHistory = useHistory()

  function editAddHandler(id) {
    console.log(props)
    let url = `/edit-add/${id}`
    browserHistory.push(url)

  }
  return (
    <Card>
      <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5b72432336099b076a55f038/1596240897997-0PCTCDFWSA7IAN554PGZ/ke17ZwdGBToddI8pDm48kLue6M7bjRoDm4ngETiAUll7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbX0kVSBOaiAPmQOaCV_okilAZ2V09ysmDG9gGf1pgEmhkNt8GyT_TyPg6j8ik9Tkw/Maltipoo+Puppies+2020+Small-19.jpg" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <h5 className="postedby">posted by {name}</h5>
        <Row>
          <Col xs={6} sm={6} md={6}>
            <Button variant="info" onClick={() => editAddHandler(id)}>Edit</Button>
          </Col>
          <Col xs={6} sm={6} md={6} className="text-right">
            <Button variant="danger" onClick={() => handler(id)}>Delete</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PostTemplate;
