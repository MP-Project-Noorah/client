import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";

import {
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Box,
  Center,
  Heading,
  Button,
} from "@chakra-ui/react";

import Card from "../Card";

export default function Destinations() {
  const navigate = useNavigate();

  const [destinations, setDestinations] = useState([]);
  const [user, setUser] = useState("");
  const [id, setId] = useState(localStorage.getItem("ID"));
  const [select, setSelect] = useState(1);
  const [filterItems, setFilterItems] = useState([]);

  useEffect(() => {
    getUserItem();
    getAllItems();
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

  const getAllItems = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/destinations/get`
      );

      setDestinations(result.data);
      setFilterItems(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const searchFun = (e) => {
    const searchWord = e.target.value;
    console.log(searchWord);

    if (searchWord) {
      const newItems = destinations.map(
        (item) =>
          item.name.includes(searchWord) || item.city.includes(searchWord)
      );

      setFilterItems(newItems);
    } else setFilterItems(destinations);
  };

  const sortDFun = (val) => {
    console.log(val);
    let arr = [...destinations];
    if (val == 1) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i].reviews < arr[j].reviews) {
            let swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
          }
        }
      }
      setFilterItems(arr);
    } else if (val == 2) {
      for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i].hotelInfo[0].price);
        let price1 =
          (arr[i].hotelInfo[0].price + arr[i].hotelInfo[1].price) / 2;
        for (let j = i + 1; j < arr.length; j++) {
          let price2 =
            (arr[j].hotelInfo[0].price + arr[j].hotelInfo[1].price) / 2;
          if (price1 < price2) {
            let swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
          }
        }
      }
      //setHotels(arr);
      // } else if (val == 3) {
      //   let arr = [...hotels];
      //   for (let i = 0; i < arr.length; i++) {
      //     // console.log(arr[i].hotelInfo[0].price);

      //     for (let j = i + 1; j < arr.length; j++) {
      //       if (arr[i].reviews > arr[j].reviews) {
      //         let swap = arr[i];
      //         arr[i] = arr[j];
      //         arr[j] = swap;
      //       }
      //     }
      //   }
      //   setHotels(arr);
      // } else if (val == 4) {
      //   let arr = [...hotels];
      //   for (let i = 0; i < arr.length; i++) {
      //     //console.log(arr[i].hotelInfo[0].price);

      //     for (let j = i + 1; j < arr.length; j++) {
      //       if (arr[i].reviews < arr[j].reviews) {
      //         let swap = arr[i];
      //         arr[i] = arr[j];
      //         arr[j] = swap;
      //       }
      //     }
      //   }
      //   setHotels(arr);
    }
  };

  return (
    <div>
      <Box
        bg={`linear-gradient(0deg,
      rgba(0, 0, 0, 0.30),
      rgba(0, 0, 0, 0.30)
    ),
    url("https://static1.s123-cdn-static-a.com/ready_uploads/media/2666516/800_5e05374d7cdbf.jpg")`}
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
              وجهتك جاهزة معنا ،انت جاهز ؟
            </Heading>
            <Heading marginBottom="5%" class="home1">
              السعودية الوجهة القادمة للعالم
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
                <Input placeholder="البحث" onChange={(e) => searchFun(e)} />
                <InputLeftElement children={<Search2Icon color="gray.300" />} />
              </InputGroup>

              <Select
                placeholder="الأفضل مبيعًا"
                onChange={(e) => sortDFun(e.target.value)}
              >
                <option value="1">الأعلى تقييمًا</option>
                <option value="2">الأقل تقييمًا</option>
                <option value="3">الثمن من الأعلى الى الأقل </option>
                <option value="4">الثمن من الأقل الى الأعلى</option>
                <option value="4">الأحدث</option>
              </Select>

              <Select placeholder="مكة">
                <option value="val2">المدينة</option>
                <option value="val3">الرياض </option>
                <option value="val4">بريدة</option>
                <option value="val4">أبها</option>
                <option value="val4">جدة</option>
              </Select>

              <Select placeholder="الكل">
                <option value="val1">عائلي</option>
                <option value="val2">اصدقاء</option>
                <option value="val3">ثقافي</option>
                <option value="val3">رياضي</option>
                <option value="val3">ديني</option>
              </Select>
            </Box>
          </Box>

          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={6}
            marginTop="5%"
            w="100%"
          >
            {filterItems.map((item) => {
              return (
                <Card
                  id={item._id}
                  catg={item.catg}
                  name={item.name}
                  city={item.city}
                  reviews={item.reviews}
                  image={item.image}
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
    </div>
  );
}
