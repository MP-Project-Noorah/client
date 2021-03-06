import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input, Heading, Button, Box, Textarea } from "@chakra-ui/react";

export default function AdminTransportation() {
  const [transportation, setTransportation] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [city, setCity] = useState("");
  const [carType, setCarType] = useState("");
  const [model, setModel] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/transportation/get`
      );

      setTransportation(result.data);
      //console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addTransportation = async () => {
    const userId = localStorage.getItem("ID");
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/transportation/add`,
        {
          userId,
          companyName,
          city,
          carType,
          model,
          image,
          price,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      //console.log(result.data);

      getAllItems();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTransportation = async (transportationId) => {
    const userId = localStorage.getItem("ID");
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/transportation/del`,
        {
          data: { transportationId, userId },
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      getAllItems();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Box
        w="70%"
        margin="auto"
        marginTop="5%"
        borderRadius="md"
        border="1px"
        borderColor="#ccd0d5"
        padding="50"
      >
        <Heading fontSize="l" marginTop="3%">
          ?????? ????????????:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="??????????"
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <Heading fontSize="l" marginTop="3%">
          ??????????????:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="??????????????"
          onChange={(e) => setCity(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          ?????? ??????????????:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="?????? ??????????????"
          onChange={(e) => setCarType(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          ??????????????:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="??????????????"
          onChange={(e) => setModel(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          ???????? ????????????:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="???????? ????????????"
          onChange={(e) => setImage(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          ??????????????:
        </Heading>

        <Input
          pr="4.5rem"
          type="number"
          placeholder="??????????????"
          onChange={(e) => setPrice(e.target.value)}
        />

        <Button marginTop="13%" w="100%" onClick={() => addTransportation()}>
          ??????????????
        </Button>
      </Box>

      <h1>??????????????</h1>
      {transportation.map((item) => (
        <>
          <h2>?????? ???????????? : {item.companyName}</h2>
          <p>?????????????? : {item.city}</p>
          <p>?????? ?????????????? : {item.carType}</p>
          <p>?????????????? : {item.model}</p>
          <p>????????????: {item.image}</p>
          <p> ??????????????: {item.price}</p>

          <br />
          <Button onClick={() => deleteTransportation(item._id)}>
            {" "}
            delete{" "}
          </Button>

          <br />
          <hr />
          <br />
        </>
      ))}
    </div>
  );
}
