import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input, Heading, Button, Box, Textarea } from "@chakra-ui/react";

export default function AdminDayInYourCity() {
  const [dayInYourCity, setDayInYourCity] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [desc, setDesc] = useState("");
  const [cost, setCost] = useState(0);
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
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/dayInYourCity/add`,
        {
          name,
          city,
          desc,
          expiryDate,
          cost,
          catg,
          timeStart,
          timeFinish,
        }
        // {
        //   headers: {
        //     authorization: `Bearer ${localStorage.getItem("token")}`,
        //   },
        // }
      );

      console.log(result.data);

      getAllItems();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteDayInYourCity = async (dayInYourCityId) => {
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/dayInYourCity/del`,
        {
          data: { dayInYourCityId },
          // headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
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
          الإسم:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="الإسم"
          onChange={(e) => setName(e.target.value)}
        />
        <Heading fontSize="l" marginTop="3%">
          المدينة:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="المدينة"
          onChange={(e) => setCity(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          الوصف:
        </Heading>

        <Textarea
          pr="4.5rem"
          type="text"
          placeholder="الوصف"
          onChange={(e) => setDesc(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          تاريخ نهاية الفعالية:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="2000-01-01"
          onChange={(e) => setExpiryDate(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          التكلفة:
        </Heading>

        <Input
          pr="4.5rem"
          type="number"
          placeholder="التكلفة"
          onChange={(e) => setCost(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          بداية الوقت :
        </Heading>

        <Input
          pr="4.5rem"
          type="number"
          placeholder="بداية الوقت"
          onChange={(e) => setTimeStart(e.target.value)}
        />
        <Heading fontSize="l" marginTop="3%">
          نهاية الوقت:
        </Heading>

        <Input
          pr="4.5rem"
          type="number"
          placeholder="نهاية الوقت"
          onChange={(e) => setTimeFinish(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          التصنيف:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="التصنيف"
          onChange={(e) => setCatg(e.target.value)}
        />

        <Button marginTop="13%" w="100%" onClick={() => addDayInYourCity()}>
          الإضافة
        </Button>
      </Box>

      <br />
      <h1>الوجهات</h1>
      {dayInYourCity.map((item) => (
        <>
          <h2>الإسم : {item.name}</h2>
          <p>المدينة : {item.city}</p>
          <p>الوصف : {item.desc}</p>
          <p>تاريخ نهاية الفعالية : {item.expiryDate}</p>
          <p> التكلفة: {item.cost}</p>
          <p> وقت البداية: {item.timeStart}</p>
          <p> وقت النهاية: {item.timeFinish}</p>
          <p> التصنيف: {item.catg}</p>

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
