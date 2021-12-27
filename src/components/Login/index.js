import React, { useState } from "react";
import axios from "axios";
import { login2 } from "./../../reducers/login";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Input,
  Heading,
  InputGroup,
  Button,
  InputLeftElement,
  Box,
} from "@chakra-ui/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const showPasswordFun = () => setShowPassword(!showPassword);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  const login = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/login`,
        { email, password }
      );

      const data = {
        token: result.data.token,
        role: result.data.result[0].role,
        ID: result.data.result[0]._id,
        username: result.data.result[0].username,
      };

      dispatch(login2(data));

      alert("Successful login");
      navigate("/");
    } catch (err) {
      alert("Unsuccessful login");
    }
  };

  return (
    <div>
      <Box
        w="30%"
        margin="auto"
        marginTop="5%"
        borderRadius="md"
        border="1px"
        borderColor="#ccd0d5"
        padding="50"
      >
        <Heading fontSize="l" marginTop="3%">
          الإيميل:
        </Heading>

        <Input
          pr="4.5rem"
          type="email"
          placeholder="اكتب إيميلك"
          marginTop="5%"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Heading fontSize="l" marginTop="3%">
          كلمة المرور:
        </Heading>

        <InputGroup size="md" marginTop="3%">
          <Input
            pr="4.5rem"
            type={showPassword ? "text" : "password"}
            placeholder="اكتب كلمة مرور"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputLeftElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={showPasswordFun}>
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputLeftElement>
        </InputGroup>

        <Heading fontSize="l" marginTop="3%">
          هل نسيت كلمة المرور؟ <Link to="/resetPass">اضغط هنا</Link>
        </Heading>

        <Button marginTop="13%" w="100%" onClick={() => login()}>
          التسجيل
        </Button>
      </Box>
    </div>
  );
}
