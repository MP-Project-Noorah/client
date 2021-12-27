import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Flex, Spacer, Box, Button, HStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { login2, logout2 } from "./../../reducers/login";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Box
        border="1px"
        fontSize="14px"
        fontWeight="semibold"
        borderColor="#ccd0d5"
        padding="1%"
      >
        <Flex>
          <Box>وجهتي</Box>
          <Spacer />

          <Box display="flex" justifyContent="space-between">
            <HStack spacing="24px">
              <Link to="/"> الرئيسية </Link>
              <Link to="/destinations"> الوجهات </Link>
              <Link to="/dayInYourCity"> يوم في مدينتك </Link>
              <Link to="/userDestinations"> وجهات المستخدمين </Link>
              <Link to="/travelTips"> ارشادات السفر </Link>

              {localStorage.getItem("ID") ? (
                <>
                  {localStorage.getItem("role") ===
                  "61a48ba362b112055163b918" ? (
                    <Link to="/admin"> Admin </Link>
                  ) : (
                    <></>
                  )}

                  <Button
                    colorScheme="blue"
                    variant="solid"
                    onClick={() => {
                      const data = {
                        token: "",
                        role: "",
                        ID: "",
                        username: "",
                      };
                      dispatch(logout2(data));
                      navigate("/");
                    }}
                  >
                    تسجيل الخروج
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    colorScheme="blue"
                    variant="solid"
                    onClick={() => navigate("/login")}
                  >
                    تسجيل الدخول
                  </Button>
                  <Button
                    colorScheme="blue"
                    variant="outline"
                    onClick={() => navigate("/signup")}
                  >
                    التسجيل
                  </Button>
                </>
              )}
            </HStack>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
