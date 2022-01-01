import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Box,
  Center,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import Card from "../Card";
export default function DayInYourCity() {
  const navigate = useNavigate();

  const [dayInYourCity, setDayInYourCity] = useState([]);
  const [user, setUser] = useState("");
  const [select, setSelect] = useState(2);
  const [id, setId] = useState(localStorage.getItem("ID"));
  useEffect(() => {
    getUserItem();
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

  const getUserItem = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/get/${id}`
      );

      setUser(result.data);
      //console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box
        bg={`linear-gradient(0deg,
      rgba(0, 0, 0, 0.30),
      rgba(0, 0, 0, 0.30)
    ),
    url("${"https://www.aleqt.com/sites/default/files/rbitem/2020/06/24/1413816-336340325.jpg"}")`}
        w="100%"
        h="500px"
        p={4}
        color="white"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Center>
          <Box marginTop="13%" alignItems="baseline" textAlign="center">
            <Heading marginBottom="5%" class="home2">
              وجهتك اليوميه خلها علينا !
            </Heading>
            <Heading marginBottom="5%" class="home1">
              بس جهز نفسك
            </Heading>
          </Box>
        </Center>
      </Box>

      <Center>
        <Box display="flex" marginTop="10%" w="90%" bg="white" p="3%">
          <Box w="30%">
            <Box
              borderColor="rgba(102, 102, 153, 0.4)"
              borderWidth="1px"
              p="3%"
              marginLeft="10%"
              h="300"
            >
              <InputGroup>
                <Input placeholder="البحث" />
                <InputLeftElement children={<Search2Icon color="gray.300" />} />
              </InputGroup>

              <Select placeholder="الأفضل مبيعًا">
                <option value="val1">الأعلى تقييمًا</option>
                <option value="val2">الأقل تقييمًا</option>
                <option value="val3">الثمن من الأعلى الى الأقل </option>
                <option value="val4">الثمن من الأقل الى الأعلى</option>
                <option value="val4">الأحدث</option>
              </Select>

              <Select placeholder="مكة">
                <option value="val2">المدينة</option>
                <option value="val3">الرياض </option>
                <option value="val4">بريدة</option>
                <option value="val4">أبها</option>
                <option value="val4">جدة</option>
                <option value="val4">بريدة</option>
              </Select>

              <Select placeholder="الكل">
                <option value="val1">عائلي</option>
                <option value="val2">مع الأصدقاء</option>
                <option value="val3">مع الضيوف</option>
              </Select>
            </Box>
          </Box>

          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={6}
            marginTop="5%"
            w="100%"
          >
            {dayInYourCity.map((item) => {
              return (
                <Card
                  id={item._id}
                  catg={item.catg}
                  name={item.name}
                  city={item.city}
                  reviews={item.reviews}
                  image={item.images[0]}
                  getAllItems={getAllItems}
                  getUserItem={getUserItem}
                  user={user}
                  select={select}
                />
              );
            })}
          </Grid>
        </Box>
      </Center>
    </>
  );
}
