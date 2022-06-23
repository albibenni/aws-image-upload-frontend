import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfiles = () => {
  const [userInfo, setUserInfo] = useState([]);

  const fetchUserProfiles = () => {
    axios.get("http://localhost:8080/user-profile").then((res) => {
      console.log(res);
      setUserInfo(res);
    });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  return <div></div>;
};

export default UserProfiles;
