import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Select,
  Avatar,
  Image,
  Input,
  Heading,
  Button,
  Box,
  Textarea,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  hotelRedux,
  transportationRedux,
  flightRedux,
  touristGuideRedux,
  destinationRedux,
} from "./../../reducers/order";

export default function DestinationTouristGuides({ city }) {
  const [touristGuides, setTouristGuides] = useState([]);
  const [touristGuide, setTouristGuide] = useState("");
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state;
  });
  useEffect(() => {
    getAllItemsByCity();
  }, []);

  const getAllItemsByCity = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/touristGuides/getByCity/${city}`
      );

      setTouristGuides(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const selectTouristGuideFun = async (id) => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/touristGuides/get/${id}`
      );

      const data = {
        touristGuide: result.data,
      };
      dispatch(touristGuideRedux(data));

      setTouristGuide(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>المرشد السياحي</h1>
      <Select
        placeholder="الكل"
        onChange={(e) => {
          if (e.target.value) selectTouristGuideFun(e.target.value);
        }}
      >
        {touristGuides.map((item) => {
          return (
            <>
              <option value={item._id}>
                {item.fname} {item.lname}
              </option>
            </>
          );
        })}
      </Select>

      {touristGuide ? (
        <>
          <Avatar size="md" name="Ryan Florence" src={touristGuide.avter} />
          <h1>{touristGuide.fname}</h1>
          <h1>{touristGuide.lname}</h1>
          <h1>{touristGuide.city}</h1>
          <h1>{touristGuide.mobile}</h1>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
