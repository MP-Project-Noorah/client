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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Box,
} from "@chakra-ui/react";
import axios from "axios";

import DestinationHotel from "./../DestinationHotel";
import DestinationTouristGuides from "./../DestinationTouristGuides";
import DestinationTransportation from "./../DestinationTransportation";
import DestinationFlights from "./../DestinationFlights";

export default function DestinationCost({ city }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <Box
        w={["50%", "50%", "50%", "40%"]}
        // h="450"
        bg="rgba(255, 255, 255, 0.60)"
        // shadow="md"
        // borderWidth="1px"
        padding="3%"
        borderRadius="none"
      >
        <Text> ????????????:</Text>
        <DestinationHotel city={city} />
        <Text>???????????? ??????????????</Text>
        <DestinationTouristGuides city={city === "??????????" ? "????????????" : city} />
        <DestinationTransportation city={city} />
        <DestinationFlights city={city} />
        <p>?????????????? ????????????</p>

        <h1>{state.setOrder.destination._id}</h1>
        <h1>????????????</h1>
        <h1>{state.setOrder.hotel._id}</h1>
        <Checkbox>?????????? ??????????????</Checkbox>
        <h1>?????? ????????????????</h1>
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
        <h1>?????? ??????????????</h1>
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

        <h1>?????? ??????????</h1>
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
        <Checkbox>??????????????????</Checkbox>
        <h1>{state.setOrder.transportation._id}</h1>
        <Checkbox>???????????? ??????????????</Checkbox>
        <h1>{state.setOrder.touristGuide._id}</h1>
        <h1>?????? ??????????????</h1>
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

        {/* <Button onClick={onOpen}>????????????</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>????????????</ModalHeader>
          <ModalCloseButton marginRight="90%" />
          <ModalBody>??????????</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              ??????????
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}

        <Button onClick={onOpen}>??????????</Button>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>??????????</ModalHeader>
            <ModalCloseButton marginRight="90%" />
            <ModalBody>
              ?????????? ???????? ?????????? ?????? ?????????? ???????????? . ???????????? ?????? ??????????????
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                ??????????
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
}
