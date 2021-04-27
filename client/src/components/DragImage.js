import React, { useState, useEffect } from "react";
// import axios from 'axios';
import ImageUploading from "react-images-uploading";
import { Button } from 'react-bootstrap';

function DragImage(props) {
    const [images, setImages] = React.useState([]);
    const maxNumber = 1;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        // console.log(imageList, addUpdateIndex);
        props.handler(imageList)
    };

    useEffect(() => {
        if (props.image) {
            setImages(props.image);
        }


    }, [props.image])
    // const [values, setValues] = useState({
    //     imagePreviewUrl: "", 
    //     picFile: null
    //  })
    //  let fileInput = React.createRef(); 

    //      // Activates user file input to set div
    //     const editProfilePic = () => {
    //         fileInput.current.click();
    //     } 
    //     // Handles the image that was input by user
    //     const handleImageChange = e => {
    //         e.preventDefault();
    //         let reader = new FileReader();
    //         let inFile = e.target.files[0];
    //         reader.onloadend = () => {
    //             setValues({...values, 
    //                 picFile: inFile, 
    //                 imagePreviewUrl: reader.result
    //             })
    //         };
    //         reader.readAsDataURL(inFile);
    //     };

    //     const handleSubmit = async() => {
    //       // response stores the response back from the API
    //       response = await axios.post(`/storage/upload`,form_data)
    //       .catch(error => {
    //          alert("Error occurred while uploading picture, try uploading a smaller image size or try again later.")
    //          return;
    //    });
    //    }

    return (
        <div className="App uplodimg">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                            <button
                                className="alert-secondary"
                                style={isDragging ? { color: "green" } : null}
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                Browse or Drag and Drop Image here
                </button>
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item imgupdated">
                                    <div className="text-center imgUp">
                                        <img src={image.data_url} alt="" />
                                    </div>
                                    <div className="image-item__btn-wrapper text-center">
                                        <Button variant="primary" onClick={() => onImageUpdate(index)}>Update</Button>
                                        <Button variant="danger" onClick={() => onImageRemove(index)}>Remove</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </ImageUploading>
        </div>
    );
};

export default DragImage;
