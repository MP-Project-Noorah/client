import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Accordion,
  AccordionItem,
  Box,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import DestinationHotel from "./../DestinationHotel";
import DestinationTouristGuides from "./../DestinationTouristGuides";
import DestinationTransportation from "./../DestinationTransportation";
import DestinationFlights from "./../DestinationFlights";
import DestinationCost from "./../DestinationCost";
import Comments from "./../Comments";
import { useParams } from "react-router-dom";

//import { AccordionIcon } from "@chakra-ui/icons";

export default function DestinationInfo() {
  const { id, city } = useParams();

  const [destination, setDestination] = useState({});
  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/destinations/getDestinationById/${id}`
      );

      setDestination(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Tabs variant="enclosed" margin="5%">
        <TabList>
          <Tab>عن الرحلة</Tab>
          <Tab>خطة الوجهة</Tab>
          <Tab>الفندق</Tab>
          <Tab>الحجز</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {destination.result ? <p>{destination.result.desc}</p> : <></>}
          </TabPanel>
          <TabPanel>
            {destination.festivals ? (
              <Accordion defaultIndex={[0]} allowMultiple>
                {destination.festivals.map((item, index) => {
                  return (
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box flex="1" textAlign="right">
                            اليوم {index + 1}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Image src={item.imge} alt={item.name} />
                        <Heading> {item.name}</Heading>
                        <Text>{item.desc}</Text>
                        <h1>{item.cost}</h1>
                        <h1>{item.map}</h1>
                      </AccordionPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            ) : (
              <></>
            )}
          </TabPanel>
          <TabPanel>
            <DestinationHotel />
          </TabPanel>

          <TabPanel>
            <DestinationTouristGuides city={city} />
            <DestinationTransportation city={city} />
            <DestinationFlights city={city} />
            <DestinationCost city={city} />
            <p>التكلفة الكلية</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Comments id={id} />
    </div>
  );
}
