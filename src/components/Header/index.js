import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Flex,
  Spacer,
  Box,
  Button,
  HStack,
  MenuList,
  MenuItem,
  Menu,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  RepeatIcon,
  EditIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { login2, logout2 } from "./../../reducers/login";
import Logout from "./../Logout";
import "./style.css";

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
        position="fixed"
        zIndex="1"
        top="0"
        w="100%"
        bg="#FFFFF7"
        opacity=".9"
      >
        <Flex>
          <span className="logo">وجهتي</span>
          <Spacer />
          <Box display="flex" justifyContent="space-between">
            <HStack spacing="24px">
              <Link to="/"> الرئيسية </Link>
              <Link to="/destinations"> الوجهات </Link>
              <Link to="/dayInYourCity"> يوم في مدينتك </Link>
              <Link to="/PlanYourTrip">خطط لرحلتك</Link>
              <Link to="/travelTips"> ارشادات السفر </Link>

              {localStorage.getItem("ID") ? (
                <>
                  {localStorage.getItem("role") ===
                  "61a48ba362b112055163b918" ? (
                    <Link to="/admin"> Admin </Link>
                  ) : (
                    <></>
                  )}

                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Options"
                      icon={<HamburgerIcon />}
                      variant="outline"
                    />
                    <MenuList>
                      <MenuItem
                        icon={<AddIcon />}
                        command="⌘T"
                        onClick={() => navigate("/UserInfo")}
                      >
                        معلوماتي
                      </MenuItem>
                      <MenuItem
                        icon={<ExternalLinkIcon />}
                        command="⌘N"
                        onClick={() => navigate("/MyOrders")}
                      >
                        طلباتي
                      </MenuItem>
                      <MenuItem
                        icon={<RepeatIcon />}
                        command="⌘⇧N"
                        onClick={() => navigate("/MyFav")}
                      >
                        مفضلاتي
                      </MenuItem>
                      <MenuItem
                        icon={<EditIcon />}
                        command="⌘O"
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
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </>
              ) : (
                <>
                  <Button
                    bg="#7294BD"
                    color="white"
                    borderRadius="none"
                    variant="solid"
                    onClick={() => navigate("/login")}
                  >
                    تسجيل الدخول
                  </Button>
                  <Button
                    borderRadius="none"
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
          {/* 
          <Box
            h="150px"
            w="8%"
            bg="black"
            opacity=".1"
            position="fixed"
            zIndex="1"
            marginRight="3%"
          ></Box> */}
        </Flex>
      </Box>
    </div>
  );
}
