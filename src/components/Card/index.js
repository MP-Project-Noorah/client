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
  Heading,
  Text,
  Center,
} from "@chakra-ui/react";
import { Search2Icon, StarIcon, ArrowBackIcon } from "@chakra-ui/icons";
import FavIcon from "../FavIcon";
import { useNavigate } from "react-router-dom";

export default function Card({
  id,
  catg,
  name,
  city,
  reviews,
  image,
  getAllItems,
  getUserItem,
  user,
  select,
}) {
  const navigate = useNavigate();
  return (
    <GridItem
      w="100%"
      h="500"
      backgroundImage={`url("${image}")`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Button
        rightIcon={<ArrowBackIcon />}
        bg="#666699"
        padding="1%"
        color="black"
        onClick={() => {
          if (select === 1) navigate(`/destinations/${city}/${id}`);
          else navigate(`/dayInYourCity/${id}`);
        }}
      ></Button>
      <Box
        w="72%"
        h="30%"
        bg="rgba(102, 102, 153, 0.8)"
        marginTop="50%"
        marginRight="27%"
        color="white"
        textAlign="center"
      >
        <Heading fontSize="100%">
          <FavIcon
            idPro={id}
            getAllItems={getAllItems}
            user={user}
            getUserItem={getUserItem}
          />
          {catg}{" "}
        </Heading>

        <Heading fontSize="100%">{name}</Heading>
        <Text>{city}</Text>
        {/* <Text fontSize="80%">
          {item.startDate.split("T")[0]} الى {item.expiryDate.split("T")[0]}
        </Text> */}
        <Text>تبدأ الأسعار من 3000 ريال</Text>
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon
              key={i}
              color={i < reviews ? "teal.500" : "gray.300"}
              zIndex={"1"}
            />
          ))}
        <Button
          borderRadius="none"
          bg="#666699"
          onClick={() => {
            if (select === 1) navigate(`/destinations/${city}/${id}`);
            else navigate(`/dayInYourCity/${id}`);
          }}
        >
          احجز الآن
        </Button>
      </Box>
    </GridItem>
  );
}
