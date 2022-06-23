import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <div>
        <h1>{userProfiles.username}</h1>
        <p>{userProfiles.userProfileId}</p>
      </div>
    );
  });
};

export default UserProfiles;
