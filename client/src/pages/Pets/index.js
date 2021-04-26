import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Posts from "../../components/PostTemplate";
import { getPostData, editPostData } from "../../utils/Posts";
import { useHistory } from "react-router";
import { Addbtn } from "../../components/Addbtn";

function Pets() {
  const browserHistory = useHistory();
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    setPostData(getPostData("pets"));
  }, []);

  function deletehandler(id) {
    let filterAd = getPostData("pets").filter((data) => data.id != id);
    setPostData(filterAd);
    editPostData(filterAd, "pets");
  }

  return (
    <>
      <Sidebar />
      <div className="Layout">
        <Container>
          <h4 className="heading_h">
            In this category you can make posts which are related to pets ONLY.
          </h4>
          <p>
            e.g.post here if you would like to find someone to take care of your
            pet.{" "}
          </p>

          <div className="text-center mrbt">
            <Addbtn onClick={() => browserHistory.push("/postad?type=pets")} />
          </div>

          <Row>
            {postData.map((item) => (
              <>
                <Col xs="12" sm="4" md="4" lg="4">
                  <Posts data={item} handler={deletehandler} />
                </Col>
              </>
            ))}
            {postData.length == 0 && (
              <Col xs="12" sm="12" md="12" lg="12" className="text-center">
                <Alert variant="light">
                  You don't have any posts, please create one!
                </Alert>
              </Col>
            )}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Pets;
