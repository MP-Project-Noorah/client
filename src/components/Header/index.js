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

                  <Button colorScheme="blue" variant="solid" onClick={() => {}}>
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
