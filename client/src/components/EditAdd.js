import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "./LoginForm.css";
import { updatePostData, getPostData, editPostData } from "../utils/Posts";
import { useLocation, useHistory } from "react-router";
import DragImage from "./DragImage";

function EditAdd(props) {
  const [adDetails, setAdDetails] = useState({ 
    title: "", 
    name: "", 
    description: "", 
    image: '' 
  });
  const location = useLocation();
  const browserHistory = useHistory();
  const [editFlag, setEditFlag] = useState(false);
  const storageType = location.search.split("=").pop();
  useEffect(() => {
    let AdId = getUrlFromId();

    if (AdId) {
      setEditFlag(true);
      let AdByIdData = filterAd(AdId);
      if (AdByIdData.length > 0) {
        setAdDetails(AdByIdData[0]);
      }
    }
  }, []);

  function getUrlFromId() {
    let pathName = location.pathname;
    if (pathName.indexOf("/edit-add") == 0) {
      return pathName.split("/").pop();
    }
    return "";
  }

  function filterAd(AdId) {
    let adList = getPostData(storageType);
    let data = adList.filter((data) => data.id == AdId);
    return data;
  }

  function postAdSubmit() {
    updatePostData(adDetails, storageType);
    setTimeout(() => {
      browserHistory.push(`/${storageType}`);
    }, 500);
    //after api integration call will make
    //updatePostData()
  }

  function ImageUploadCallback(image) {
    // const base64String = image[0].data_url.replace('data:', '').replace(/^.+,/, '');
    setAdDetails({
      ...adDetails,
      imageUrl: image
    })
  }

  function editAd() {
    let adList = getPostData(storageType);
    let data = adList.filter((data) => data.id != getUrlFromId());
    let finalArray = [...data, adDetails];
    editPostData(finalArray, storageType);
    setTimeout(() => {
      browserHistory.push(`/${storageType}`);
    }, 500);
  }

  return (
    <div className="LoginFormBox editwidth">
      <div className="form-inner">
        <h2>{props.title}</h2>
        <Form.Group>
          <DragImage image={adDetails.imageUrl} handler={ImageUploadCallback} />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter Ad Title"
            value={adDetails.title}
            onChange={(e) =>
              setAdDetails({ ...adDetails, title: e.target.value })
            }
          />
        </Form.Group>
//         <Form.Group>
//           <Form.Control
//             type="text"
//             name="name"
//             placeholder="Enter Name"
//             value={adDetails.name}
//             onChange={(e) =>
//               setAdDetails({ ...adDetails, name: e.target.value })
//             }
//           />
//         </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            rows={3}
            name="desc"
            placeholder="Enter Ad description"
            value={adDetails.description}
            onChange={(e) =>
              setAdDetails({ ...adDetails, description: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <div className="homepage-btn">
            <span>
              <input
                type="submit"
                value="POST"
                onClick={editFlag ? editAd : postAdSubmit}
              />
            </span>
          </div>
        </Form.Group>
      </div>
    </div>
  );
}

export default EditAdd;
