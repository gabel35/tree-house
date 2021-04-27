import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Posts from "../../components/PostTemplate";
import { Addbtn } from "../../components/Addbtn";
import { getPostData, editPostData } from "../../utils/Posts";
import { useHistory } from "react-router";

function Event() {
  const browserHistory = useHistory();
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    setPostData(getPostData("events"));
  }, []);

  function deletehandler(id) {
    let filterAd = getPostData("events").filter((data) => data.id != id);
    setPostData(filterAd);
    editPostData(filterAd, "events");
  }

  return (
    <>
      <Sidebar />
      <div className="Layout">
        <Container>
        <h4 className="heading_h">
            In this category you can make posts about events you are hosting ONLY.
          </h4>
          <h5>
          e.g. post here if you would like to invite your nehgbors  to night boat cruise party.{" "}
          </h5>
          <div className="text-center mrbt">
            <Addbtn
              onClick={() => browserHistory.push("/postad?type=events")}
            />
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

export default Event;
