import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Switch,
  Box,
  Badge,
  Image,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Search2Icon, StarIcon } from "@chakra-ui/icons";
export default function DayInYourCity() {
  const navigate = useNavigate();

  const [dayInYourCity, setDayInYourCity] = useState([]);
  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/dayInYourCity/get`
      );

      setDayInYourCity(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <div>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        margin="7%"
        gap={4}
      >
        <GridItem
          colSpan={1}
          rowSpan={2}
          border="1px"
          borderColor="gray.300"
          p="5"
        >
          <h1>السعر:</h1>
          <RangeSlider aria-label={["min", "max"]} defaultValue={[1000, 3000]}>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>

          <h1>التصنيف:</h1>
          <Select placeholder="الكل">
            <option value="val1">عائلي</option>
            <option value="val2">مع الأصدقاء</option>
            <option value="val3">مع الضيوف</option>
          </Select>
          <h1>المدينة:</h1>
          <Select placeholder="مكة">
            <option value="val2">المدينة</option>
            <option value="val3">الرياض </option>
            <option value="val4">بريدة</option>
            <option value="val4">أبها</option>
            <option value="val4">جدة</option>
            <option value="val4">بريدة</option>
          </Select>
          <h1>
            مناسب للعائلة: <Switch size="md" />
          </h1>
        </GridItem>
        <GridItem colSpan={4} rowSpan={1} display="flex" alignItems="baseline">
          <InputGroup w="30%">
            <Input placeholder="البحث" />
            <InputLeftElement children={<Search2Icon color="gray.300" />} />
          </InputGroup>
          <Spacer />

          <Select placeholder="الأفضل مبيعًا" w="30%">
            <option value="val1">الأعلى تقييمًا</option>
            <option value="val2">الأقل تقييمًا</option>
            <option value="val3">الثمن من الأعلى الى الأقل </option>
            <option value="val4">الثمن من الأقل الى الأعلى</option>
            <option value="val4">الأحدث</option>
          </Select>
          <Spacer />

          <h1>
            شامل الوجهات المنتهية تاريخها: <Switch size="md" />
          </h1>
        </GridItem>

        <GridItem colSpan={4} rowSpan={1}>
          <Grid templateColumns="repeat(3, 1fr)" margin="7%" gap={4}>
            {dayInYourCity.map((item) => {
              return (
                <GridItem>
                  <Box borderWidth="1px">
                    <Image src={item.images[0]} alt={item.name} />
                    <Box p="1.5">
                      <Box display="flex">
                        <Badge borderRadius="full" px="2" colorScheme="teal">
                          جديد
                        </Badge>
                        <Box
                          color="gray.500"
                          fontWeight="semibold"
                          letterSpacing="wide"
                          fontSize="xs"
                          textTransform="uppercase"
                          ml="2"
                        >
                          {item.catg} &bull; مناسب للعائلة
                        </Box>
                      </Box>
                      <Box>
                        {" "}
                        {item.name} ({item.city})
                      </Box>
                      <Box>الأسعار تبدأ من : 3000 ريال</Box>

                      <Box display="flex" mt="2" alignItems="center">
                        {Array(5)
                          .fill("")
                          .map((_, i) => (
                            <StarIcon
                              key={i}
                              color={i < item.reviews ? "teal.500" : "gray.300"}
                            />
                          ))}
                        <Box as="span" ml="2" color="gray.600" fontSize="sm">
                          {property.reviewCount} مراجعة
                        </Box>

                        <Button
                          borderRadius="none"
                          onClick={() => {
                            navigate(`/dayInYourCity/${item._id}`);
                          }}
                        >
                          احجز الآن
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </GridItem>
              );
            })}
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
}
