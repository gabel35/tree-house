import React from "react";
import Sidebar from "../../components/Sidebar";
import "./style.css";
import Logo from "../../assets/images/logo.png";

function Home() {
  return (
    <>
      <Sidebar />
      <div className="Mdiv">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="App">
          <div className="content_box">
            <h1>Need Help?</h1>
            <h2>Please contact one of our developers:</h2>
            <hr></hr>
            <div>
            <h2>Jude Sanchez</h2>
              <div className="HomeButton center">
                <a href="https://github.com/Jude626" target="_blank">
                  <button className="homepage-btn">
                    <span>Github</span>
                  </button>
                </a>
              </div>
              <h2>Kristina Iankovskaia</h2>
              <div className="HomeButton center">
                <a href="https://github.com/kiankovskaia" target="_blank">
                  <button className="homepage-btn">
                    <span>Github</span>
                  </button>
                </a>
              </div>
              <h2>Jacqueline Rodney</h2>
              <div className="HomeButton center">
                <a href="https://github.com/jacquelinerodney" target="_blank">
                  <button className="homepage-btn">
                    <span>Github</span>
                  </button>
                </a>
              </div>
              <h2>Gabriel J. Sanchez</h2>
              <div className="HomeButton center">
                <a href="https://github.com/gabel35" target="_blank">
                  <button className="homepage-btn">
                    <span>Github</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
