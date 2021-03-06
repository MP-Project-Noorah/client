import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input, Heading, Button, Box, Textarea } from "@chakra-ui/react";

export default function AdminDayInYourCity() {
  const [dayInYourCity, setDayInYourCity] = useState([]);
  const [images, setImages] = useState([]);
  const [imageName, setImageName] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [desc, setDesc] = useState("");
  const [cost, setCost] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [catg, setCatg] = useState("");
  const [timeStart, setTimeStart] = useState(0);
  const [timeFinish, setTimeFinish] = useState(0);

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/dayInYourCity/get`
      );

      setDayInYourCity(result.data);
      //console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addDayInYourCity = async () => {
    const userId = localStorage.getItem("ID");
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/dayInYourCity/add`,
        {
          userId,
          name,
          city,
          desc,
          startDate,
          expiryDate,
          cost,
          catg,
          timeStart,
          timeFinish,
          images,
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

  const deleteDayInYourCity = async (dayInYourCityId) => {
    const userId = localStorage.getItem("ID");
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/dayInYourCity/del`,
        {
          data: { dayInYourCityId, userId },
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
          ??????????:
        </Heading>
        <Input
          pr="4.5rem"
          type="text"
          placeholder="????????????"
          onChange={(e) => setImageName(e.target.value)}
        />
        <Button
          marginTop="13%"
          w="100%"
          onClick={() => {
            setImages([...images, imageName]);
            //console.log(festivalIds);
          }}
        >
          ??????????????
        </Button>
        <Button
          marginTop="3%"
          w="100%"
          onClick={() => {
            setImages([]);
            //console.log(festivalIds);
          }}
        >
          ??????
        </Button>
        <h1>??????????????</h1>
        {images.map((item) => (
          <>
            <h2>{item}</h2>

            <br />
            <hr />
            <br />
          </>
        ))}
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
          ?????????? ?????????? ????????????????:
        </Heading>
        <Input
          pr="4.5rem"
          type="text"
          placeholder="2000-01-01"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <Heading fontSize="l" marginTop="3%">
          ?????????? ?????????? ????????????????:
        </Heading>
        <Input
          pr="4.5rem"
          type="text"
          placeholder="2000-01-01"
          onChange={(e) => setExpiryDate(e.target.value)}
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
        <Heading fontSize="l" marginTop="3%">
          ?????????? ?????????? :
        </Heading>
        <Input
          pr="4.5rem"
          type="number"
          placeholder="?????????? ??????????"
          onChange={(e) => setTimeStart(e.target.value)}
        />
        <Heading fontSize="l" marginTop="3%">
          ?????????? ??????????:
        </Heading>
        <Input
          pr="4.5rem"
          type="number"
          placeholder="?????????? ??????????"
          onChange={(e) => setTimeFinish(e.target.value)}
        />
        <Heading fontSize="l" marginTop="3%">
          ??????????????:
        </Heading>
        <Input
          pr="4.5rem"
          type="text"
          placeholder="??????????????"
          onChange={(e) => setCatg(e.target.value)}
        />
        <Button marginTop="13%" w="100%" onClick={() => addDayInYourCity()}>
          ??????????????
        </Button>

        {/* <Button
          marginTop="3%"
          w="100%"
          onClick={() => {
            setImages([]);
            setImageName("");
            setName("");
            setCity("");
            setDesc("");
            setCost(0);
            setCatg("");
            setStartDate("");
            setStartDate("");
            setTimeStart(0);
            setTimeFinish(0);

            //console.log(festivalIds);
          }}
        >
          ??????
        </Button> */}
      </Box>

      <br />
      <h1>??????????????</h1>
      {dayInYourCity.map((item) => (
        <>
          <h2>id : {item._id}</h2>
          <h2>?????????? : {item.name}</h2>
          <p>?????????????? : {item.city}</p>
          <p>?????????? : {item.desc}</p>
          <p> ?????????? ??????????????: {item.startDate}</p>
          <p> ?????????? ??????????????: {item.expiryDate}</p>
          <p> ??????????????: {item.cost}</p>
          <p> ?????? ??????????????: {item.timeStart}</p>
          <p> ?????? ??????????????: {item.timeFinish}</p>
          <p> ??????????????: {item.catg}</p>

          <p> ??????????: </p>
          {item.images.map((item) => (
            <>
              <h2>{item}</h2>

              <br />
              <hr />
              <br />
            </>
          ))}

          <br />
          <Button onClick={() => deleteDayInYourCity(item._id)}>
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
