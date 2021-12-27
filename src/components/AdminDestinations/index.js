import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input, Heading, Button, Box } from "@chakra-ui/react";

export default function AdminDestinations() {
  const [hotels, setHotels] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [desc, setDesc] = useState("");
  const [imge1, setImge1] = useState("");
  const [imge2, setImge2] = useState("");
  const [imge3, setImge3] = useState("");
  const [imge4, setImge4] = useState("");
  const [map, setMap] = useState("");
  const [moreInfo, setMoreInfo] = useState("");
  const [reviews, setReviews] = useState("");
  const [hotelInfo, setHotelInfo] = useState("");

  // useEffect(() => {
  //   getAllItems();
  // }, []);

  // const getAllItems = async () => {
  //   try {
  //     const result = await axios.get(
  //       `${process.env.REACT_APP_BASE_URL}/hotels/get`
  //     );

  //     setHotels(result.data);
  //     //console.log(result.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const addHotel = async () => {
  //   try {
  //     const result = await axios.post(
  //       `${process.env.REACT_APP_BASE_URL}/hotels/addPost`,
  //       {
  //         name,
  //         city,
  //         desc,
  //         imges: [],
  //         userId,
  //         avter,
  //         username,
  //       }
  //       // {
  //       //   headers: {
  //       //     authorization: `Bearer ${localStorage.getItem("token")}`,
  //       //   },
  //       // }
  //     );

  //     console.log(result.data);

  //     getAllItems();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div>
      <Box
        w="70%"
        margin="auto"
        marginTop="5%"
        borderRadius="md"
        border="1px"
        borderColor="#ccd0d5"
        padding="50"
      >
        <Heading fontSize="l" marginTop="3%">
          الإسم:
        </Heading>

        <Input
          pr="4.5rem"
          type="email"
          placeholder="الإسم"
          onChange={(e) => setName(e.target.value)}
        />
        <Heading fontSize="l" marginTop="3%">
          المدينة:
        </Heading>

        <Input
          pr="4.5rem"
          type="email"
          placeholder="اكتب إيميلك"
          onChange={(e) => setName(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          الوصف:
        </Heading>

        <Input
          pr="4.5rem"
          type="email"
          placeholder="اكتب إيميلك"
          onChange={(e) => setName(e.target.value)}
        />

        <Button marginTop="13%" w="100%">
          التسجيل
        </Button>
      </Box>
    </div>
  );
}
