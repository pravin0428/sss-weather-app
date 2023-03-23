import {
  Button,
  Flex,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Box,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import sunny from "./assets/sunny.png";
import sun from "./assets/sun.png";
import { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  const [city, setCity] = useState<any>("mumbai");
  const [cityData, setCityData] = useState<any>([]);
  const count = 0;
  //   const [status , setStatus] = useState<boolean>(false)
  //    console.log(cityData?.weather[0].main
  //     , "((((((((")
  const handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined = (
    e: any
  ) => {
    const { name, value } = e.target;
    setCity({ ...city, [name]: value });
  };
  const getCityData = async ({ city }: any) => {
    //  console.log(city);

    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=98929df6db2abeea425b2f891797e7d7`
    );
    let data = await res.json();
    setCityData(data);
  };

  useEffect(() => {
    getCityData(city);
  }, [city]);
  const submitCity = () => {};
  //  console.log(cityData);

  return (
    <div>
      <form action="" onClick={submitCity}>
        {cityData?.coord?.lon ? (
          <Stack
            // border="2px solid grey"
            direction={{ base: "column", md: "row" }}
          >
            <Flex
              p={8}
              flex={1}
              align={"center"}
              justify={"center"}
              //   border="2px solid grey"
            >
              <Stack spacing={4} w={"full"} maxW={"md"}>
                <Heading fontSize={"2xl"}>Search City</Heading>
                <FormControl id="email">
                  <FormLabel>Enter City Name</FormLabel>
                  <Input name="city" onChange={handleChange}></Input>
                </FormControl>

                <Stack spacing={6}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  ></Stack>
                  {/* <Button colorScheme={"blue"} variant={"solid"}>
             
                 SEARCH WEATHER
    
                  </Button> */}
                </Stack>
              </Stack>
            </Flex>
            <Flex flex={1}>
              <Box
                //   border="2px solid red"
                width="95%"
              >
                <Box margin="20px 0px 40px 0px">
                  <Flex
                    margin="2% 0% 2% 0%"
                    justifyContent={"center"}
                    // border="2px solid green"
                    gap="5px"
                  >
                    <Heading textAlign={"center"}>{cityData.name} </Heading>
                    <Text fontSize={"20px"} textAlign={"center"}>
                      {cityData?.sys?.country} Weather
                    </Text>
                  </Flex>

                  <Flex
                    justify="center"
                    pt="2%"
                    gap="2%"
                    border="2px solid yellow"
                    width="70%"
                    margin="auto"
                    borderRadius="10px"
                  >
                    <Text textAlign={"center"}>
                      {Math.round(cityData?.main?.temp - 273)}
                    </Text>
                    <sup>o</sup>
                    {cityData?.main?.temp - 273 > 25 ? (
                      <img width={"70px"} src={sunny} alt="" />
                    ) : (
                      <img width={"70px"} src={sun} alt="" />
                    )}
                    <Text>{cityData?.weather[0]?.main}</Text>
                  </Flex>
                </Box>

                <Grid
                  templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2,1fr)",
                  }}
                  gap={6}
                >
                  <GridItem
                    boxShadow="base"
                    // p="6"
                    rounded="md"
                    bg="white"
                    w="100%"
                    h="10"
                  >
                    {" "}
                    High/Low : {cityData?.coord?.lon}/{cityData?.coord?.lat}{" "}
                  </GridItem>
                  <GridItem
                    boxShadow="base"
                    // p="6"
                    rounded="md"
                    bg="white"
                    w="100%"
                    h="10"
                  >
                    wind: {cityData?.wind?.speed} km/hr{" "}
                  </GridItem>
                  <GridItem
                    boxShadow="base"
                    // p="6"
                    rounded="md"
                    bg="white"
                    w="100%"
                    h="10"
                    textAlign="center"
                  >
                    Humidity : {cityData?.main?.humidity}%
                  </GridItem>
                  <GridItem
                    boxShadow="base"
                    // p="6"
                    rounded="md"
                    bg="white"
                    w="100%"
                    h="10"
                  >
                    Wind-Direction: {cityData?.wind?.deg} <sup>o</sup>deg
                  </GridItem>
                  <GridItem
                    boxShadow="base"
                    // p="6"
                    rounded="md"
                    bg="white"
                    w="100%"
                    h="10"
                  >
                    Pressure : {cityData?.main?.pressur}hPa
                  </GridItem>
                  <GridItem
                    boxShadow="base"
                    // p="6"
                    rounded="md"
                    bg="white"
                    w="100%"
                    h="10"
                  >
                    {" "}
                    sunrise: {cityData?.sys?.sunrise} AM
                  </GridItem>
                  <GridItem
                    boxShadow="base"
                    // p="6"
                    rounded="md"
                    bg="white"
                    w="100%"
                    h="10"
                  >
                    Visibility : {cityData?.visibility} 4Km
                  </GridItem>
                  <GridItem
                    boxShadow="base"
                    rounded="md"
                    bg="white"
                    w="100%"
                    h="10"
                  >
                    {" "}
                    sunset: {cityData?.sys?.sunset} PM
                  </GridItem>
                </Grid>
              </Box>
            </Flex>
          </Stack>
        ) : (
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={4} w={"full"} maxW={"md"}>
              <Heading fontSize={"2xl"}>Search City</Heading>
              <FormControl id="email">
                <FormLabel>Enter City Name</FormLabel>
                <Input name="city" onChange={handleChange}></Input>
              </FormControl>

              <Stack spacing={6}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                ></Stack>

                <Button colorScheme={"blue"} variant={"solid"} gap="2%">
                  SEARCH WEATHER <BsSearch />
                </Button>
              </Stack>
            </Stack>
          </Flex>
        )}
      </form>
    </div>
  );
};
export default Search;
