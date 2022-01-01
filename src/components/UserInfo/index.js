import React, { useState, useEffect } from "react";
import axios from "axios";
import Logout from "./../Logout";
import { Button, Heading, Box } from "@chakra-ui/react";

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
    const userId = localStorage.getItem("ID");

    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/users/del`,
        {
          data: { id, userId },
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log("ffff");

      //getAllItems();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {user ? (
        <>
          <Box bg="white" w="100%" shadow="md" p="4%" marginTop="4%">
            <Heading>{user._id}</Heading>
            <Heading>{user.phoneNumber}</Heading>
            <Heading>{user.email}</Heading>

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
          </Box>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
