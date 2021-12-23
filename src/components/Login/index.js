import React, { useState } from "react";
import {
  Input,
  Heading,
  InputGroup,
  Button,
  InputLeftElement,
  Box,
} from "@chakra-ui/react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordFun = () => setShowPassword(!showPassword);
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
        />
        <Heading fontSize="l" marginTop="3%">
          كلمة المرور:
        </Heading>

        <InputGroup size="md" marginTop="3%">
          <Input
            pr="4.5rem"
            type={showPassword ? "text" : "password"}
            placeholder="اكتب كلمة مرور"
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

        <Button marginTop="13%" w="100%">
          التسجيل
        </Button>
      </Box>
    </div>
  );
}
