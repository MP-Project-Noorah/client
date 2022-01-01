import React from "react";
import DestinationHotel from "./../DestinationHotel";
import DestinationTouristGuides from "./../DestinationTouristGuides";
import DestinationTransportation from "./../DestinationTransportation";
import DestinationFlights from "./../DestinationFlights";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Center,
  Heading,
  Text,
  Button,
  AspectRatio,
  Spacer,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Order({ type, text1, text2 }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={`linear-gradient(0deg,
      rgba(0, 0, 0, 0.30),
      rgba(0, 0, 0, 0.30)
    ),
    url("/order.jpeg")`}
        w="100%"
        h="750"
        p={4}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        display="flex"
      >
        <Box marginTop="17%" alignItems="baseline" color="white">
          <Heading marginBottom="5%" class="home1">
            {text1}
          </Heading>
          <Heading marginBottom="5%" class="home2">
            {text2}
          </Heading>
        </Box>

        <Box
          w="40%"
          marginTop="10%"
          marginRight="10%"
          h="400"
          bg="rgba(255, 255, 255, 0.90)"
          shadow="md"
          borderWidth="1px"
          padding="3%"
          borderRadius="md"
          display="flex"
        >
          <Button onClick={onOpen}>الوجهة</Button>
          <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset="slideInBottom"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>الوجهة</ModalHeader>
              <ModalCloseButton marginRight="90%" />
              <ModalBody>بريدة</ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  إغلاق
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <DestinationHotel city={"بريدة"} />
          <DestinationTouristGuides city={"القصيم"} />
          <br />
          <DestinationTransportation city={"بريدة"} />
          <DestinationFlights city={"القصيم"} />
        </Box>
      </Box>
    </>
  );
}
