import React, { useState, useEffect } from "react";
import axios from "axios";
import Logout from "./../Logout";
import { Button } from "@chakra-ui/react";

export default function UserInfo() {
  const [user, setUser] = useState("");
  const [id, setId] = useState(localStorage.getItem("ID"));
  useEffect(() => {
    getUserItem();
  }, []);

  const getUserItem = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/get/${id}`
      );

      setUser(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async () => {
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/users/del`,
        {
          data: { id },
          // headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      //getAllItems();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {user ? (
        <>
          <h1>{user._id}</h1>
          <h1>{user.phoneNumber}</h1>
          <h1>{user.email}</h1>
          <Button
            onClick={() => {
              deleteUser();
              {
                <Logout />;
              }
            }}
          >
            {" "}
            حذف الحساب{" "}
          </Button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
