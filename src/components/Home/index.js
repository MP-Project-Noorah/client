import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Center,
  Heading,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import CardInHome from "../CardInHome";
import PopularItems from "../PopularItems";
import "./style.css";
import { useNavigate } from "react-router-dom";
const images = [
  "https://www.flydubai.com/en/media/book-flights-to-abha-2560x960_tcm8-136160.jpg",
  "https://static1.s123-cdn-static-a.com/ready_uploads/media/2891858/800_5e1d72f11bfb2.jpg",
  "https://static1.s123-cdn-static-a.com/ready_uploads/media/6460733/800_5f6a0d3bd8d0a.jpg",
  "https://static1.s123-cdn-static-a.com/ready_uploads/media/2891803/800_5e13a5bceac04.jpg",
  "https://static1.s123-cdn-static-a.com/ready_uploads/media/5517833/800_5eea8182b9e29.jpg",
];

export default function Home() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex(index + 1);
      if (index === images.length - 1) {
        setIndex(0);
      }
    }, 2000);
    return () => {
      clearInterval(id);
    };
  });
  return (
    <div>
      <Box
        bg={`linear-gradient(0deg,
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    ),
    url(${images[index]})`}
        w="100%"
        h="700px"
        p={4}
        color="white"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Center>
          <Box marginTop="17%" alignItems="baseline" textAlign="center">
            <Heading marginBottom="5%" class="home2">
              دليل وجهتك معنا وبحسب ميزانيتك !
            </Heading>
            <Heading marginBottom="5%" class="home1">
              في اي مكان بالسعودية
            </Heading>
            <Button
              backgroundColor="#7294BD"
              borderRadius="none"
              onClick={() => navigate(`/destinations`)}
            >
              {" "}
              اعرف المزيد
            </Button>
          </Box>
        </Center>
      </Box>
      <CardInHome
        name={"الوجهات"}
        text={`ندري انك تبي ترفه نفسك او احبابك بوجهة سياحية بدون بحث عن فندق
                او تخطيط لطلعة او اماكن ترفيهة وحتى قلق الميزانية عشان كذا حنا
                جهزنا لك وجهة سياحية متكاملة مع مين ماكانت او تكون.`}
        image={"/home2.jpeg"}
        link={"/destinations"}
      />
      <PopularItems link={"destinations"} />

      <CardInHome
        name={"شارك وجهتك الخاصة"}
        text={`عطنا وجهتك اللي كانت في غاية المتعة مع اهلك او زوجتك او اصدقائك
                وشاركها معنا.`}
        image={"/home1.jpeg"}
        link={""}
      />
      <PopularItems link={"dayInYourCity"} />
      <CardInHome
        name={"شارك وجهتك الخاصة"}
        text={`عطنا وجهتك اللي كانت في غاية المتعة مع اهلك او زوجتك او اصدقائك
                وشاركها معنا.`}
        image={"/home1.jpeg"}
        link={""}
      />
      {/* <Center>
        <Grid
          marginTop="10%"
          w="70%"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(2, 1fr)"
          shadow="md"
          borderWidth="1px"
          padding="3"
          bg="white"
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
      </Center> */}
      {/* <Center>
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
      </Center> */}
    </div>
  );
}
