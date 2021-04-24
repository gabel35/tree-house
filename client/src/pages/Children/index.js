import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import "./style.css";
import Sidebar from '../../components/Sidebar';
import Footer from "../../components/Footer";
// import ChildrenPost from "../../components/ChildrenPost";
import Posts from "../../components/PostTemplate";
import Add from "../../assets/icons/add.svg";
import { getPostData, editPostData } from '../../utils/Posts'
import { useHistory } from 'react-router'
import { Addbtn } from "../../components/Addbtn";

function Children() {

  const browserHistory = useHistory()
  const [postData, setPostData] = useState([]);

  useEffect(() => {

    setPostData(getPostData())

  }, [])


  function deletehandler(id) {
    let filterAd = getPostData().filter(data => data.id != id)
    setPostData(filterAd)
    editPostData(filterAd)

  }


  return (
    <>
      <Sidebar />
      <div className="Layout">
        <Container>
          <div className="text-center mrbt">
          <Addbtn/>
          </div>
          <Row>
          {postData.map(item => (
              <>
                <Col xs="12" sm="4" md="4" lg="4">
                  <Posts data={item} handler={deletehandler} />
                </Col>
              </>
            ))}
            {postData.length == 0 &&
              <Col xs="12" sm="12" md="12" lg="12" className="text-center">
                <Alert variant="light">
                You don't have any posts, please create one!
                </Alert>
              </Col>
            }
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Children;
