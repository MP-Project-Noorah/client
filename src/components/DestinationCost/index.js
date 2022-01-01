import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

export default function DestinationCost() {
  const [adultTicket, setAdultTicket] = useState(0);
  const [childTicket, setChildTicket] = useState(0);
  const [infantTicket, setInfantTicket] = useState(0);
  const [price, setPrice] = useState(0);
  const [numOfPeople, setNumOfPeople] = useState(1);

  const state = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    addToOrders();
  }, [price]);

  const cal = () => {
    let sum = 0;
    for (let i = 0; i < state.setOrder.destination.festivals.length; i++) {
      sum += state.setOrder.destination.festivals[i].cost * numOfPeople;
    }
    if (state.setOrder.transportation)
      sum += state.setOrder.transportation.price;
    if (state.setOrder.touristGuide)
      sum += 250 * state.setOrder.destination.festivals.length;
    if (state.setOrder.hotel)
      sum +=
        Number(state.setOrder.hotel.hotelInfo[0].price) *
        state.setOrder.destination.festivals.length;
    if (state.setOrder.flight)
      sum +=
        adultTicket * state.setOrder.flight.adultTicketPrice +
        childTicket * state.setOrder.flight.childTicketPrice +
        infantTicket * state.setOrder.flight.infantTicketPrice;
    setPrice(sum);
  };

  const addToOrders = async () => {
    try {
      const id = localStorage.getItem("ID");
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/orders/add`,
        {
          userId: id,
          destinationId: state.setOrder.destination._id,
          transportationId: state.setOrder.transportation._id
            ? state.setOrder.transportation._id
            : "",
          hotelId: state.setOrder.hotel._id ? state.setOrder.hotel._id : "",
          touristGuideId: state.setOrder.touristGuide._id
            ? state.setOrder.touristGuide._id
            : "",
          ticket: [
            state.setOrder.hotel,
            adultTicket,
            childTicket,
            infantTicket,
          ],
          price,
          numOfPeople,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>{state.setOrder.destination._id}</h1>
      <h1>الفندق</h1>
      <h1>{state.setOrder.hotel._id}</h1>
      <Checkbox>تذاكر الطيران</Checkbox>
      <h1>عدد البالغين</h1>
      <NumberInput
        size="sm"
        maxW={20}
        defaultValue={0}
        min={0}
        max={5}
        onChange={(e) => setAdultTicket(e)}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <h1>عدد الأطفال</h1>
      <NumberInput
        size="sm"
        maxW={20}
        defaultValue={0}
        min={0}
        max={5}
        onChange={(e) => setChildTicket(e)}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <h1>عدد الرضع</h1>
      <NumberInput
        size="sm"
        maxW={20}
        defaultValue={0}
        min={0}
        max={5}
        onChange={(e) => setInfantTicket(e)}
      >
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
        <NumberInputField />
      </NumberInput>

      <h1> {state.setOrder.flight._id}</h1>
      <Checkbox>المواصلات</Checkbox>
      <h1>{state.setOrder.transportation._id}</h1>
      <Checkbox>المرشد السياحي</Checkbox>
      <h1>{state.setOrder.touristGuide._id}</h1>
      <h1>عدد الأشخاص</h1>
      <NumberInput
        size="sm"
        maxW={20}
        defaultValue={1}
        min={1}
        max={10}
        onChange={(e) => setNumOfPeople(e)}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button onClick={() => cal()}>الحجز</Button>
    </div>
  );
}
