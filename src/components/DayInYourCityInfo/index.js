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

export default function DayInYourCityInfo() {
  const { id } = useParams();

  const [dayInYourCity, setDayInYourCity] = useState({});
  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/dayInYourCity/getDayInYourCityById/${id}`
      );

      setDayInYourCity(result.data);
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
          <Tab>الحجز</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {dayInYourCity ? (
              <>
                {/* 
               name: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  desc: { type: String, required: true },
  cost: { type: Number, required: true },
  images: { type: Array, required: true },
  numOfOrders: { type: Number },
  startDate: { type: Date, min: "2000-01-01", required: true },
  expiryDate: { type: Date, min: "2000-01-01", required: true },
  timeStart: { type: Number, required: true },
  timeFinish: { type: Number, required: true },
  catg: { type: String, required: true, trim: true },
  reviews: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  orderCount: { type: Number, default: 0 },
  isItSuitableForFamily: { type: Boolean, default: true },
  isDel: { type: Boolean, default: false }, */}

                <h1>{dayInYourCity.name}</h1>
                <p>{dayInYourCity.desc}</p>
                <p>{dayInYourCity.desc}</p>
                <Image src={dayInYourCity.imge} alt={dayInYourCity.name} />
                <h1>{dayInYourCity.cost}</h1>
                <h1>{dayInYourCity.map}</h1>
              </>
            ) : (
              <></>
            )}
          </TabPanel>
          <TabPanel>
            <p>التكلفة الكلية</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Comments id={id} />
    </div>
  );
}
