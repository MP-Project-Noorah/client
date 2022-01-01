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
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import PopularItems from "../PopularItems";
import "./style.css";
import { useNavigate } from "react-router-dom";
const images = [
  "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_headers/310563/900x600-1-50-62970602aa07be3b1147c01cea649889.jpg",
  "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_galleries/285169/2000x2000-0-70-27bb87e7ae3dd27151fbc510fb8a9bb4.jpg",
  "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_headers/310899/900x600-1-50-6319aa3d9714394a5eb28452abb66b4d.jpg",
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
    <div class="home">
      <Box
        bg={`linear-gradient(0deg,
      rgba(0, 0, 0, 0.30),
      rgba(0, 0, 0, 0.30)
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
      <Center>
        <Box bg="white" w="70%">
          <Box textAlign="center" margin="13%">
            <Heading fontSize="170%" fontFamily="Courier New">
              المملكة هي وجهتك
            </Heading>
            <Text marginTop="1.5%" fontFamily="Courier New">
              عيش المتعة والجمال في جميع أنحاء الممكلة مابين دفء البحر الأحمر
              ومغامراته المائية.
            </Text>
            <Text fontFamily="Courier New">
              ومابين الطبيعة وأجوائها الجميلة , ومابين الجبال وتسلق جبالها ,
              ومابين أروع المناظر في تساقط الثلوج , والهروب من صخب المدينة الى
              صمت صحرائها كل هذا وأكثر بانتظاركم!{" "}
            </Text>
            {/* <hr class="line" /> */}
            <Box borderWidth="2px" bg="black" w="50%" margin="5% auto" />
          </Box>

          <Box
            w="120%"
            textAlign="center"
            bg="black"
            fontFamily="Courier New"
            padding="1%"
          >
            <Grid
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(2, 1fr)"
              shadow="md"
              padding="3"
              zIndex="1"
            >
              <GridItem colSpan={1}>
                <Image src="/home2.jpeg" alt="wjhat" w="90%" />
              </GridItem>
              <GridItem colSpan={1}>
                <Box p={7} color="white">
                  <Heading
                    fontSize="xl"
                    fontFamily="Courier New"
                    marginTop="10%"
                  >
                    الوجهات
                  </Heading>
                  <Text mt={4}>
                    تبي ترفه نفسك او احبابك بوجهة سياحية بدون بحث عن فندق او
                    تخطيط لطلعة او اماكن ترفيهة؟ وحتى قلق الميزانية ؟ عشان كذا
                    حنا جهزنا لك وجهة سياحية متكاملة مع مين ماكانت او تكون
                  </Text>
                  <Button
                    rightIcon={<ArrowBackIcon />}
                    colorScheme="teal"
                    variant="solid"
                    marginTop="3%"
                    onClick={() => {
                      navigate(`destinations`);
                    }}
                  >
                    اعرف أكثر
                  </Button>
                </Box>
              </GridItem>
            </Grid>
          </Box>

          <Box>
            <Heading
              fontSize="xl"
              fontFamily="Courier New"
              marginTop="10%"
              textAlign="center"
            >
              الوجهات الأكثر طلبًا
            </Heading>
            <Box borderWidth="2px" bg="black" w="25%" margin="auto" />

            <PopularItems link={"destinations"} />
          </Box>

          <Box
            w="120%"
            textAlign="center"
            bg="rbga(0,0,0,0.0)"
            fontFamily="Courier New"
            padding="1%"
            marginTop="10%"
          >
            <Grid
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(2, 1fr)"
              shadow="md"
              padding="3"
              zIndex="1"
              bg="rgb(224, 224, 235)"
            >
              <GridItem colSpan={1}>
                <Image src="/home2.jpeg" alt="wjhat" w="90%" />
              </GridItem>
              <GridItem colSpan={1}>
                <Box p={7}>
                  <Heading
                    fontSize="xl"
                    fontFamily="Courier New"
                    marginTop="10%"
                  >
                    يوم في مدينتك
                  </Heading>
                  <Text mt={4}>
                    اكتشف مدينتك من زاوية مختلفة، بحيث راح نسوي لك دليل سياحي مع
                    الناس اللي تختارها سواء اهلك او اصدقائك أو حتى ضيوفك وراح
                    تقضي أمتع الأوقات!
                  </Text>
                  <Button
                    rightIcon={<ArrowBackIcon />}
                    colorScheme="teal"
                    variant="solid"
                    marginTop="3%"
                    onClick={() => {
                      navigate(`/dayInYourCity`);
                    }}
                  >
                    اعرف أكثر
                  </Button>
                </Box>
              </GridItem>
            </Grid>
          </Box>

          <Box>
            <Heading
              fontSize="xl"
              fontFamily="Courier New"
              marginTop="10%"
              textAlign="center"
            >
              يوم في مدينتك الأكثر طلبًا
            </Heading>
            <hr style={{ width: "50%", margin: "auto" }} />

            <PopularItems link={"dayInYourCity"} />
          </Box>
        </Box>
      </Center>

      {/* <CardInHome
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
        link={""} */}
      {/* /> */}
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
