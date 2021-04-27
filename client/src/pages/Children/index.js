import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Posts from "../../components/PostTemplate";
import { getPostData, editPostData } from "../../utils/Posts";
import { useHistory } from "react-router";
import { Addbtn } from "../../components/Addbtn";

function Children() {
  const browserHistory = useHistory();
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    setPostData(getPostData("children"));
  }, []);

  function deletehandler(id) {
    let filterAd = getPostData("children").filter((data) => data.id != id);
    setPostData(filterAd);
    editPostData(filterAd, "children");
  }

  return (
    <>
      <Sidebar />
      <div className="Layout">
        <Container>
          <h4 className="heading_h">
            In this category you can make posts related to children ONLY.
          </h4>
          <h5>
          e.g. invite neighborhood kids to your child's birthday{" "}
          </h5>
          <div className="text-center mrbt">
            <Addbtn
              variant="success"
              onClick={() => browserHistory.push("/postad?type=children")}
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

export default Children;
