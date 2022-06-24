import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropzone from "../components/Dropzone";

const UserProfiles = (props) => {
  const [userProfiles, setUserProfiles] = useState([]);

  //get
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
        <Dropzone {...userProfiles} />
        {/* like userProfileId = {userProfiles.userProfileId} */}
        <br />
      </div>
    );
  });
};

export default UserProfiles;
