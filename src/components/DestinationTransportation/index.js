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

export default function DestinationTransportation({ city }) {
  const [transportations, setTransportations] = useState([]);
  const [transportation, setTransportation] = useState("");
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
        `${process.env.REACT_APP_BASE_URL}/transportation/getByCity/${city}`
      );

      setTransportations(result.data);
      //console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const selectTransportationFun = async (id) => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/transportation/get/${id}`
      );

      const data = {
        transportation: result.data,
      };
      dispatch(transportationRedux(data));
      setTransportation(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>المواصلات</h1>
      <Select
        placeholder="الكل"
        onChange={(e) => {
          if (e.target.value) selectTransportationFun(e.target.value);
        }}
      >
        {transportations.map((item) => {
          return (
            <>
              <option value={item._id}>
                {item.companyName} {item.carType}
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
        <></>
      )}
    </div>
  );
}
