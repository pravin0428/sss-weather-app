import "./App.css";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <Flex justifyContent={"center"} gap="10px" padding="2%">
        <Heading color="#FB9F06" fontSize={"30px"}>
          Weather
        </Heading>
        <Heading color={"black"} mb="-2%">
          App
        </Heading>
      </Flex>

      <Search />
    </div>
  );
}

export default App;
