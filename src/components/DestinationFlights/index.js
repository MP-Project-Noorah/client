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

export default function DestinationFlights({ city }) {
  const [flights, setFlights] = useState([]);
  const [flight, setFlight] = useState("");
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
        `${
          process.env.REACT_APP_BASE_URL
        }/flights/getByCity/${city}/${"الرياض"}`
      );

      setFlights(result.data);

      // console.log(state.setOrder.flight);
    } catch (err) {
      console.log(err);
    }
  };

  const selectFlightFun = async (id) => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/flights/get/${id}`
      );

      setFlight(result.data);
      const data = {
        flight: result.data,
      };
      dispatch(flightRedux(data));

      //console.log(state.setOrder.flight);
      //console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>الحجوزات</h1>
      <Select
        placeholder="الكل"
        onChange={(e) => {
          if (e.target.value) selectFlightFun(e.target.value);
        }}
      >
        {flights.map((item) => {
          return (
            <>
              <option value={item._id}>
                {item.from} {item.to} {item.flightClass}
              </option>
            </>
          );
        })}
      </Select>

      {flight ? (
        <>
          <h1>{flight.from}</h1>
          <h1>{flight.to}</h1>
          <h1>{flight.flightClass}</h1>
          <h1>{flight.adultTicketPrice}</h1>
          <h1>{flight.childTicketPrice}</h1>
          <h1>{flight.infantTicketPrice}</h1>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
