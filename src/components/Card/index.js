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
import { Search2Icon, StarIcon } from "@chakra-ui/icons";
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
    <GridItem>
      {/* marginTop="10%" w="70%" templateRows="repeat(1, 1fr)"
      templateColumns="repeat(2, 1fr)" shadow="md" borderWidth="1px" padding="3"
      bg="white" */}
      <Box borderWidth="1px" shadow="md" bg="white">
        <Image src={image} alt={name} w="100%" h="200px" />
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
              {catg} &bull; مناسب للعائلة
            </Box>
            <FavIcon
              idPro={id}
              getAllItems={getAllItems}
              user={user}
              getUserItem={getUserItem}
            />
          </Box>
          <Box>
            {" "}
            {name} ({city})
          </Box>
          <Box>الأسعار تبدأ من : 3000 ريال</Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < reviews ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              34 مراجعة
            </Box>

            <Button
              borderRadius="none"
              onClick={() => {
                if (select === 1) navigate(`/destinations/${city}/${id}`);
                else navigate(`/dayInYourCity/${id}`);
              }}
            >
              احجز الآن
            </Button>
          </Box>
        </Box>
      </Box>
    </GridItem>
  );
}
