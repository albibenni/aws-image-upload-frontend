import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropzone from "../components/Dropzone";

const UserProfiles = () => {
  const [userProfiles, setUserProfiles] = useState([]);

  const fetchUserProfiles = () => {
    axios.get("http://localhost:8080/user-profile").then((res) => {
      console.log(res);
      setUserProfiles(res.data);
    });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  return userProfiles.map((userProfiles, index) => {
    return (
      <div key={index}>
        {/* todo profile pic */}
        <br />
        <br />
        <h1>{userProfiles.username}</h1>
        <p>{userProfiles.userProfileId}</p>
        <Dropzone />
        <br />
      </div>
    );
  });
};

export default UserProfiles;
