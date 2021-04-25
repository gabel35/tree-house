import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert, Button } from 'react-bootstrap';
import "./style.css";
import Sidebar from '../../components/Sidebar';
import Footer from "../../components/Footer";
// import EventPost from "../../components/EventPost";
import Posts from "../../components/PostTemplate";
import Add from "../../assets/icons/add.svg";

import { getPostData, editPostData } from '../../utils/Posts'
import { useHistory } from 'react-router'

function Event() {

  const browserHistory = useHistory()
  const [postData, setPostData] = useState([]);

  useEffect(() => {

    setPostData(getPostData('events'))

  }, [])


  function deletehandler(id) {
    let filterAd = getPostData('events').filter(data => data.id != id)
    setPostData(filterAd)
    editPostData(filterAd, 'events')

  }

  return (
    <>
      <Sidebar />
      <div className="Layout">
        <Container>
          <div className="text-center mrbt">
            <Button variant="success" onClick={() => browserHistory.push('/postad?type=events')}>Add Post <img src={Add} width="15" alt="Logo" /></Button>
          </div>
          <h1 className="heading_h">
            Events
          </h1>
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
                <Alert variant="warning">
                  There is no PostAd data, you can add your first post to see the data
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

export default Event;
