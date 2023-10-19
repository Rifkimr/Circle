import { ThreadCard, useThreadDetail } from "@/features/thread";
import { IThreadCard } from "@/interfaces/thread";
import { IUser } from "@/interfaces/user";
import { RootState } from "@/stores/types/rootState";
import {
  Avatar,
  Box,
  Flex,
  FormControl,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Detail() {
  const auth = useSelector((state: RootState) => state.auth);
  const { thread, handlePost, handleChange, replies } = useThreadDetail();

  return (
    <>
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          width="600px"
          borderRight={"1px solid"}
          borderLeft={"1px solid"}
          borderColor={"brand.grey"}
          padding={"20px"}
        >
          <Text bg={"yellow"}>Status</Text>
          <ThreadCard
            id={thread?.id}
            user={thread?.user}
            content={thread?.content}
            posted_at={thread?.posted_at}
            image={thread?.image}
            likes_count={thread?.likes_count}
            replies_count={thread?.replies_count}
            is_liked={thread?.is_liked}
          />
          <Flex marginTop={"20px"} gap={4} w={"100%"}>
            <Avatar objectFit={"cover"} src={auth.picture} />
            <form onSubmit={handlePost} encType="multipart/form-data">
              <FormControl display={"flex"} flexDirection={"column"} gap={2}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={2}
                >
                  <Input
                    w={"400px"}
                    placeholder="Type yours reply!"
                    name="content"
                    onChange={handleChange}
                  />
                  <Input
                    borderRadius={"full"}
                    cursor={"pointer"}
                    type="submit"
                    backgroundColor={"#5272F2"}
                    color={"white"}
                    colorScheme="green"
                    value={"Reply"}
                    fontSize={"15px"}
                    width={"70px"}
                  />
                </Box>
              </FormControl>
            </form>
          </Flex>
          <Box>
            {replies?.map((reply) => {
              return (
                <Box
                  key={reply.id}
                  display={"flex"}
                  alignItems={"center"}
                  width={"600px"}
                  padding={"20px"}
                >
                  <Image
                    src={
                      reply.user?.picture
                        ? reply.user?.picture
                        : "/user-placeholder.png"
                    }
                    width={"50px"}
                    height={"50px"}
                    objectFit={"cover"}
                    borderRadius={"50%"}
                    marginRight={"20px"}
                    alt="user_profile_image"
                  />
                  <Text>{reply.content} </Text>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}
