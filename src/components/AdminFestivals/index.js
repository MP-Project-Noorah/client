import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input, Heading, Button, Box, Textarea } from "@chakra-ui/react";

export default function AdminFestivals() {
  const [festivals, setFestivals] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [desc, setDesc] = useState("");
  const [imge, setImge] = useState("");
  const [map, setMap] = useState("");
  const [cost, setCost] = useState(0);

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/festivals/get`
      );

      setFestivals(result.data);
      //console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addFestival = async () => {
    const userId = localStorage.getItem("ID");
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/festivals/add`,
        {
          userId,
          name,
          city,
          desc,
          imge,
          map,
          cost,
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

  const deleteFestival = async (festivalId) => {
    const userId = localStorage.getItem("ID");
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/festivals/del`,
        {
          data: { festivalId, userId },
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
          ??????????:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="??????????"
          onChange={(e) => setName(e.target.value)}
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
          ??????????:
        </Heading>

        <Textarea
          pr="4.5rem"
          type="text"
          placeholder="??????????"
          onChange={(e) => setDesc(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          ???????? ????????????:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="???????? ????????????"
          onChange={(e) => setImge(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          ???????? ??????????????:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="???????? ??????????????"
          onChange={(e) => setMap(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          ??????????????:
        </Heading>

        <Input
          pr="4.5rem"
          type="number"
          placeholder="??????????????"
          onChange={(e) => setCost(e.target.value)}
        />

        <Button marginTop="13%" w="100%" onClick={() => addFestival()}>
          ??????????????
        </Button>
      </Box>

      <h1>??????????????</h1>
      {festivals.map((item) => (
        <>
          <h2>id : {item._id}</h2>
          <h2>?????????? : {item.name}</h2>
          <p>?????????????? : {item.city}</p>
          <p>?????????? : {item.desc}</p>
          <p>?????????????? : {item.map}</p>
          <p>????????????: {item.imge}</p>
          <p> ??????????????: {item.cost}</p>

          <br />
          <Button onClick={() => deleteFestival(item._id)}> delete </Button>

          <br />
          <hr />
          <br />
        </>
      ))}
    </div>
  );
}
