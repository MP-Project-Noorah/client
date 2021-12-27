import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import AdminHotels from "./../AdminHotels";
import AdminDestinations from "./../AdminDestinations";
import AdminFestivals from "./../AdminFestivals";
import AdminTransportation from "./../AdminTransportation";
import AdminTouristGuides from "./../AdminTouristGuides";
import AdminFlights from "./../AdminFlights";

export default function Admin() {
  return (
    <div>
      <Tabs variant="enclosed" margin="5%">
        <TabList>
          <Tab>الفنادق</Tab>
          <Tab>الأماكن السياحية</Tab>
          <Tab>المواصلات</Tab>
          <Tab>المرشد السياحي</Tab>
          <Tab>التذاكر</Tab>
          <Tab>الوجهات</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AdminHotels />
          </TabPanel>
          <TabPanel>
            <AdminFestivals />
          </TabPanel>
          <TabPanel>
            <AdminTransportation />
          </TabPanel>
          <TabPanel>
            <AdminTouristGuides />
          </TabPanel>
          <TabPanel>
            <AdminFlights />
          </TabPanel>
          <TabPanel>
            <AdminDestinations />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
