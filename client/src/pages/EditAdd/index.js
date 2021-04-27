import React from "react";
import { Container } from 'react-bootstrap';
import Sidebar from '../../components/Sidebar';
import Footer from "../../components/Footer";
import EditAdd from "../../components/EditAdd";

function Event(props) {
  return (
    <>
      <Sidebar />
      <div className="Layout">
        <Container>
          <EditAdd title={props.title} />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Event;
