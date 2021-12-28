import React from "react";
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

//import { AccordionIcon } from "@chakra-ui/icons";

export default function DestinationInfo() {
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
            <p>الوصف</p>
          </TabPanel>
          <TabPanel>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="right">
                      اليوم الأول
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Image />
                  <Heading> اسم الفعالية</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                  <h1>التكلفة</h1>
                  <h1>الوقت</h1>
                  <h1>الموقع</h1>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="right">
                      اليوم الثاني
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </TabPanel>
          <TabPanel>
            <DestinationHotel />
          </TabPanel>

          <TabPanel>
            <DestinationTouristGuides />
            <DestinationTransportation />
            <DestinationFlights />
            <DestinationCost />
            <p>مرشد سياحي</p>
            <p>المواصلات</p>
            <p>مواصلات فقط للتوصيل الى الفندق</p>
            <p>الطيران</p>
            <p>التكلفة الكلية</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
