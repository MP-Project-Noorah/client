import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default function DestinationCost() {
  const state = useSelector((state) => {
    return state;
  });

  return (
    <div>
      <h1>{state.setOrder.destination._id}</h1>
      <h1>{state.setOrder.hotel._id}</h1>
      <Checkbox>تذاكر الطيران</Checkbox>
      <h1>عدد البالغين</h1>
      <NumberInput size="sm" maxW={20} defaultValue={0} min={0} max={5}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <h1>عدد الأطفال</h1>
      <NumberInput size="sm" maxW={20} defaultValue={0} min={0} max={5}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <h1>عدد الرضع</h1>
      <NumberInput size="sm" maxW={20} defaultValue={0} min={0} max={5}>
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
        <NumberInputField />
      </NumberInput>

      <h1> {state.setOrder.flight._id}</h1>
      <Checkbox>المواصلات</Checkbox>
      <h1>{state.setOrder.transportation._id}</h1>
      <Checkbox>المرشد السياحي</Checkbox>
      <h1>{state.setOrder.touristGuide._id}</h1>
    </div>
  );
}
