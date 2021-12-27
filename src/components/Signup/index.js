import React, { useState } from "react";
import axios from "axios";
import {
  Input,
  Heading,
  InputGroup,
  Button,
  InputLeftElement,
  Box,
} from "@chakra-ui/react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const showPasswordFun = () => setShowPassword(!showPassword);
  const showPasswordFun2 = () => setShowPassword2(!showPassword2);

  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [role, setRole] = useState("61a48b1362b112055163b916");

  const signup = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/signup`,
        { email, password: password1, role }
      );
      console.log(result.data);
      alert("Successful registering");
    } catch (err) {
      alert("Unsuccessful registering");
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
            onChange={(e) => setPassword1(e.target.value)}
          />
          <InputLeftElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={showPasswordFun}>
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputLeftElement>
        </InputGroup>

        <Heading fontSize="l" marginTop="3%">
          اعد كتابة كلمة المرور:
        </Heading>

        <InputGroup size="md" marginTop="3%">
          <Input
            pr="4.5rem"
            type={showPassword2 ? "text" : "password"}
            placeholder="اعد كتابة كلمة المرور"
            onChange={(e) => setPassword2(e.target.value)}
          />
          <InputLeftElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={showPasswordFun2}>
              {showPassword2 ? "Hide" : "Show"}
            </Button>
          </InputLeftElement>
        </InputGroup>
        <Button marginTop="13%" w="100%" onClick={() => signup()}>
          التسجيل
        </Button>
      </Box>
    </div>
  );
}
