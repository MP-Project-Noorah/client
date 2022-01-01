import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Heading, Input, Button } from "@chakra-ui/react";

export default function ResetPass() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const reset = async () => {
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/users/resetPassword`,
      { email }
    );
    console.log(result);

    //navigate(`/`);
  };

  return (
    <>
      <Heading>الإيميل</Heading>

      <Input
        marginTop="6%"
        type="email"
        name="email"
        placeholder="اكتب ايميلك لكي نرسل لك رسالة لتعديل كلمة المرور"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button marginTop="6%" w="100%" onClick={() => reset()}>
        {" "}
        ارسال{" "}
      </Button>
    </>
  );
}
