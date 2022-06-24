import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const Dropzone = (userProfileId) => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post(`http://localhost:8080/${userProfileId}/image/upload`, formData, {
        Headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        console.log("file uploaded successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};
export default Dropzone;
