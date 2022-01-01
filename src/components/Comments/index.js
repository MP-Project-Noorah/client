import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Textarea,
  Heading,
  Button,
  useToast,
  Container,
  Box,
  Image,
  Text,
  Center,
  CloseButton,
} from "@chakra-ui/react";

export default function Comments({ id }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const toast = useToast();

  useEffect(() => {
    getAllComments();
  }, []);

  const getAllComments = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/comments/getCommentsForArticle/${id}`
      );

      setComments(result.data);
      //console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addComment = async () => {
    try {
      const userId = localStorage.getItem("ID");
      const articleId = id;
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/comments/add`,
        {
          userId,
          articleId,
          text,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      //console.log(result.data);

      getAllComments();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      const userId = localStorage.getItem("ID");
      const result = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/comments/del`,
        {
          data: { commentId, userId },
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      getAllComments();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Center>
        <Box w="60%">
          التعليقات:
          <Heading fontSize="l" marginTop="3%">
            إضافة تعليق:
          </Heading>
          <Textarea
            pr="4.5rem"
            type="text"
            placeholder="إضافة تعليق"
            onChange={(e) => setText(e.target.value)}
            bg="white"
          />
          <Button
            marginTop="1%"
            marginBottom="5%"
            w="100%"
            onClick={() => {
              addComment();
              toast({
                title: "إضافة تعليق",
                description: "تم بنجاح إضافة التعليق",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            }}
          >
            الإضافة
          </Button>
          {comments.map((item) => {
            return (
              <>
                <Box bg="white" w="100%" shadow="md" p="4%" marginTop="4%">
                  {localStorage.getItem("ID") &&
                  (item.userId === localStorage.getItem("ID") ||
                    localStorage.getItem("role") ===
                      "61a48ba362b112055163b918") ? (
                    <CloseButton
                      marginRight="90%"
                      onClick={() => deleteComment(item._id)}
                    />
                  ) : (
                    // <Button
                    //   marginTop="3%"
                    //   w="100%"
                    //   onClick={() => deleteComment(item._id)}
                    // >
                    //   الحذف
                    // </Button>
                    <></>
                  )}
                  <Text>{item.userId}</Text>
                  <Box
                    borderWidth="2px"
                    bg="black.900"
                    w="100%"
                    marginBottom="2%"
                  />
                  {item.text}
                </Box>
              </>
            );
          })}
        </Box>
      </Center>
    </div>
  );
}
