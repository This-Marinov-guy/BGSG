import React, { useState, useEffect } from "react";
import { FiImage, FiUserPlus } from "react-icons/fi";

const ImageInput = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];

  const inputHandler = (event) => {
    console.log(event.target.files[0]);
    //set image
    let pickedFile = event.target.files[0];
    if (!validFileTypes.find((type) => type === pickedFile.type)) {
      setIsValid(false);
      return;
    }
    if (event.target.files || event.target.files.length === 1) {
      setFile(pickedFile);
      setIsValid(true);
      return;
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="rnform-group center_section">
      <div className="image_input_window">
        <input
          className="image_input_field"
          onInput={inputHandler}
          onChange={props.onChange}
          value={props.value}
          type="file"
          placeholder="Image"
          name="image"
          accept=".png,.jpg,.jpeg"
        />
        {!previewUrl ? <FiImage /> : <img src={previewUrl} alt="Preview" />}
      </div>
      <div>
        {props.errorRequired}
        {!isValid && (
          <p className="error">The file is not supported, please try again</p>
        )}
      </div>
    </div>
  );
};

export default ImageInput;
