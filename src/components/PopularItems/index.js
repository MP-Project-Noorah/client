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
import FavIcon from "../FavIcon";
import Card from "../Card";

export default function PopularItems({ link }) {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState("");
  const [id, setId] = useState(localStorage.getItem("ID"));
  const [select, setSelect] = useState(link === "destinations" ? 1 : 2);

  useEffect(() => {
    getUserItem();
    getAllItems();
  }, []);

  const getUserItem = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/get/${id}`
      );

      //   for (let i = 0; i < result.length; i++) {
      //     for (let j = i + 1; j < arr.result; j++) {
      //       console.log(result[i].reviews);
      //       if (result[i].reviews > result[j].reviews) {
      //         let swap = result[i];
      //         result[i] = result[j];
      //         result[j] = swap;
      //       }
      //       console.log(result[i]);
      //     }
      //   }

      setUser(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllItems = async () => {
    try {
      console.log(link);
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/${link}/getTop`
      );

      setItems([result.data[0], result.data[1], result.data[2]]);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <GridItem colSpan={4} rowSpan={1}>
        <Grid templateColumns="repeat(3, 1fr)" margin="7%" gap={4}>
          {items.map((item) => {
            return (
              <Card
                id={item._id}
                catg={item.catg}
                name={item.name}
                city={item.city}
                reviews={item.reviews}
                image={link === "destinations" ? item.image : item.images[0]}
                getAllItems={getAllItems}
                getUserItem={getUserItem}
                user={user}
                select={select}
              />
            );
          })}
        </Grid>
      </GridItem>
    </div>
  );
}
