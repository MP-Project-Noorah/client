import React from "react";
import {
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Switch,
  Box,
  Badge,
  Image,
  Button,
} from "@chakra-ui/react";
import { Search2Icon, StarIcon } from "@chakra-ui/icons";
export default function Destinations() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <div>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        margin="7%"
        gap={4}
      >
        <GridItem
          colSpan={1}
          rowSpan={2}
          border="1px"
          borderColor="gray.300"
          p="5"
        >
          <h1>السعر:</h1>
          <RangeSlider aria-label={["min", "max"]} defaultValue={[1000, 3000]}>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>

          <h1>التصنيف:</h1>
          <Select placeholder="الأفضل مبيعًا">
            <option value="val1">الأعلى تقييمًا</option>
            <option value="val2">الأقل تقييمًا</option>
            <option value="val3">الثمن من الأعلى الى الأقل </option>
            <option value="val4">الثمن من الأقل الى الأعلى</option>
          </Select>
          <h1>المدينة:</h1>
          <Select placeholder="مكة">
            <option value="val2">المدينة</option>
            <option value="val3">الرياض </option>
            <option value="val4">بريدة</option>
            <option value="val4">أبها</option>
            <option value="val4">جدة</option>
            <option value="val4">بريدة</option>
          </Select>
          <h1>
            مناسب للعائلة: <Switch size="md" />
          </h1>
        </GridItem>
        <GridItem colSpan={4} rowSpan={1} display="flex">
          <InputGroup w="40%">
            <Input placeholder="البحث" />
            <InputLeftElement children={<Search2Icon color="gray.300" />} />
          </InputGroup>

          <Select placeholder="الأفضل مبيعًا" w="40%">
            <option value="val1">الأعلى تقييمًا</option>
            <option value="val2">الأقل تقييمًا</option>
            <option value="val3">الثمن من الأعلى الى الأقل </option>
            <option value="val4">الثمن من الأقل الى الأعلى</option>
            <option value="val4">الأحدث</option>
          </Select>

          <h1>
            شامل الوجهات المنتهية: <Switch size="md" />
          </h1>
        </GridItem>

        <GridItem colSpan={4} rowSpan={1}>
          <Grid templateColumns="repeat(3, 1fr)" margin="7%" gap={4}>
            <GridItem>
              <Box borderWidth="1px">
                <Image src={property.imageUrl} alt={property.imageAlt} />
                <Box p="1.5">
                  <Box display="flex">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      جديد
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      التصنيف &bull; مناسب للعائلة
                    </Box>
                  </Box>
                  <Box> اسم الفعالية (المدينة)</Box>
                  <Box>الأسعار تبدأ من : 3000 ريال</Box>

                  <Box display="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {property.reviewCount} مراجعة
                    </Box>

                    <Button borderRadius="none">احجز الآن</Button>
                  </Box>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
}
