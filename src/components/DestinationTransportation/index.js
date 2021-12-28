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

export default function DestinationTransportation() {
  const [transportations, setTransportations] = useState([]);
  const [transportation, setTransportation] = useState("");
  useEffect(() => {
    getAllItemsByCity();
  }, []);

  const getAllItemsByCity = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/transportation/getByCity/${"القصيم"}`
      );

      setTransportations(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const selectTransportationFun = async (id) => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/transportation/get/${id}`
      );

      setTransportation(result.data);
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
          if (e.target.value) selectTransportationFun(e.target.value);
        }}
      >
        {transportations.map((item) => {
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

      {transportation ? (
        <>
          <Image size="md" name="car" src={transportation.image} />
          <h1>{transportation.companyName}</h1>
          <h1>{transportation.city}</h1>
          <h1>{transportation.carType}</h1>
          <h1>{transportation.model}</h1>
          <h1>{transportation.price}</h1>
        </>
      ) : (
        <>nnnn</>
      )}
    </div>
  );
}
