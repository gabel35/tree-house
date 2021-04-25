import React from "react";
import { Card, Button } from "react-bootstrap";

const ChildrenPost = (props) => {
  //   const { img, alt, title, description, deployedUrl, repo } = props;

  return (
    <Card>
      <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5b72432336099b076a55f038/1596240897997-0PCTCDFWSA7IAN554PGZ/ke17ZwdGBToddI8pDm48kLue6M7bjRoDm4ngETiAUll7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbX0kVSBOaiAPmQOaCV_okilAZ2V09ysmDG9gGf1pgEmhkNt8GyT_TyPg6j8ik9Tkw/Maltipoo+Puppies+2020+Small-19.jpg" />
      <Card.Body>
        <Card.Title>Looking for a baby sitter</Card.Title>
        <Card.Text>
          Hey Guys! Is someone available to watch Rex next weekend while I am out of town?
        </Card.Text>
        <h5>posted by Alex</h5>
        <Button variant="success" href = "mailto: gabrieljose3135@gmail.com">message</Button>
      </Card.Body>
    </Card>
  );
};

export default ChildrenPost;
