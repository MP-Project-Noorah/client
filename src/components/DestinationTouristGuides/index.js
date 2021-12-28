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

export default function DestinationTouristGuides() {
  const [touristGuides, setTouristGuides] = useState([]);
  const [touristGuide, setTouristGuide] = useState("");
  useEffect(() => {
    getAllItemsByCity();
  }, []);

  const getAllItemsByCity = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/touristGuides/getByCity/${"القصيم"}`
      );

      setTouristGuides(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const selectTouristGuideFun = async (id) => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/touristGuides/get/${id}`
      );

      setTouristGuide(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Select
        placeholder="الكل"
        onChange={(e) => {
          if (e.target.value) selectTouristGuideFun(e.target.value);
        }}
      >
        {touristGuides.map((item) => {
          console.log(item.avter);
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
        <>nnnn</>
      )}
    </div>
  );
}
