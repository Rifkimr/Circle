import { FormRegister } from "@/features/auth";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={"50px"}
    >
      <FormRegister />
      <Box display={"flex"} gap={2} mt={"20px"}>
        <Text>Already have account?</Text>
        <Link to={"/auth/login"}>
          <Text color={"#5272F2"} cursor={"pointer"}>
            Login
          </Text>
        </Link>
      </Box>
    </Box>
  );
}
