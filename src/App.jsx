import {
  Button,
  Radio,
  ChakraProvider,
  Stack,
  RadioGroup
} from "@chakra-ui/react";
import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [radio, setRadio] = useState("1");
  return (
    <ChakraProvider>
      <input placeholder="テキストを入力" />
      <RadioGroup onChange={setRadio} value={radio}>
        <Stack direction="row">
          <Radio value="1" colorScheme="red">
            First
          </Radio>
          <Radio value="2" colorScheme="green">
            Second
          </Radio>
          <Radio value="3" colorScheme="orange">
            Third
          </Radio>
        </Stack>
      </RadioGroup>
      <Button>追加</Button>
    </ChakraProvider>
  );
};
