import React from "react";
import { Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <div>
      <Box
        marginTop="10%"
        h="150px"
        bg="black.100"
        fontWeight="semibold"
        borderColor="#ccd0d5"
        padding="1%"
        top="0"
        w="100%"
        bg="rgba(0,0,0,0.5)"
      >
        <Box textAlign="center" color="white">
          جميع الحقوق محفوظة لنورة المحيميد في معسكر طويق 2020
          <Box borderWidth="2px" bg="black" w="50%" margin="5% auto" />
        </Box>
        {/* <Box
          bg="black.100"
          fontWeight="semibold"
          borderColor="#ccd0d5"
          padding="1%"
          top="0"
          w="100%"
          bg="white"
        /> */}
      </Box>
    </div>
  );
}
