import React from "react";
import ImageUploading from "react-images-uploading";

function DragImage() {
    const [images, setImages] = React.useState([]);
    const maxNumber = 1;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div className="App">
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
                style={isDragging ? { color: "green" } : null}
                onClick={onImageUpload}
                {...dragProps}
                >
                Browse or Drag and Drop Image here
                </button>
                &nbsp;
                {imageList.map((image, index) => (
                <div key={index} className="image-item">
                    <img src={image.data_url} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
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
