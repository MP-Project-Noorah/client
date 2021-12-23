import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Center,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <div>
      <Box
        bg={`linear-gradient(0deg,
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    ),
    url("https://www.flydubai.com/en/media/book-flights-to-abha-2560x960_tcm8-136160.jpg")`}
        w="100%"
        h="700px"
        p={4}
        color="white"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      ></Box>
      <Center>
        <Grid
          marginTop="10%"
          w="70%"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(2, 1fr)"
          shadow="md"
          borderWidth="1px"
          padding="3"
        >
          <GridItem colSpan={1}>
            <Image src="/home2.jpeg" alt="wjhat" w="70%" />
          </GridItem>
          <GridItem colSpan={1}>
            <Box p={7}>
              <Heading fontSize="xl">الوجهات</Heading>
              <Text mt={4}>
                ندري انك تبي ترفه نفسك او احبابك بوجهة سياحية بدون بحث عن فندق
                او تخطيط لطلعة او اماكن ترفيهة وحتى قلق الميزانية عشان كذا حنا
                جهزنا لك وجهة سياحية متكاملة مع مين ماكانت او تكون.
              </Text>
              <Button
                rightIcon={<ArrowBackIcon />}
                colorScheme="teal"
                variant="solid"
                marginTop="3%"
              >
                اعرف أكثر
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </Center>

      <Center>
        <Grid
          marginTop="10%"
          w="70%"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(2, 1fr)"
          shadow="md"
          borderWidth="1px"
          padding="3"
        >
          <GridItem colSpan={1}>
            <Box p={7}>
              <Heading fontSize="xl">شارك وجهتك الخاصة</Heading>
              <Text mt={4}>
                عطنا وجهتك اللي كانت في غاية المتعة مع اهلك او زوجتك او اصدقائك
                وشاركها معنا.
              </Text>
              <Button
                rightIcon={<ArrowBackIcon />}
                colorScheme="teal"
                variant="solid"
                marginTop="3%"
              >
                اعرف أكثر
              </Button>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Image src="/home1.jpeg" alt="wjhat" w="70%" />
          </GridItem>
        </Grid>
      </Center>
    </div>
  );
}
