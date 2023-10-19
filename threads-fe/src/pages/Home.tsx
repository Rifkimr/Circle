import { ThreadCard, useThreads } from "@/features/thread";
import { IThreadCard } from "@/interfaces/thread";
import { RootState } from "@/stores/types/rootState";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  Heading,
  Input,
} from "@chakra-ui/react";
import { BiSolidImageAdd } from "react-icons/bi";
import { useSelector } from "react-redux";

export default function Home() {
  const auth = useSelector((state: RootState) => state.auth);
  const { handleChange, handlePost, fileInputRef, handleButtonClick, threads } =
    useThreads();

  return (
    <>
      <Box p={"20px"}>
        <Heading color={"#5272F2"} fontSize="2em" mb={"20px"}>
          Home
        </Heading>
        <Box
          bg={"transparent"}
          mt={"20px"}
          display={"flex"}
          gap={2}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <Avatar objectFit={"cover"} name="Segun Adebayo" src={auth.picture} />
          <form
            onSubmit={handlePost}
            encType="multipart/form-data"
            style={{ backgroundColor: "transparent", width: "100%" }}
          >
            <FormControl
              display={"flex"}
              gap={2}
              alignItems={"center"}
              flexDirection={"row"}
            >
              <Input
                onChange={handleChange}
                name="content"
                //value={formData.content}
                placeholder="What is happening?!"
                border={"none"}
                width={"100%"}
                type="text"
              />
              <Button
                variant={"ghost"}
                color={"#5272F2"}
                onClick={handleButtonClick}
                style={{ backgroundColor: "transparent", cursor: "pointer" }}
              >
                <BiSolidImageAdd size={35} />
              </Button>
              <Input
                display={"none"}
                onChange={handleChange}
                type="file"
                name="image"
                border={"none"}
                width={"50%"}
                ref={fileInputRef}
              />
              <Button
                colorScheme="#5272F2"
                type="submit"
                borderRadius={"20px"}
                bg={"#5272F2"}
                color={"white"}
              >
                Post
              </Button>
            </FormControl>
          </form>
        </Box>
      </Box>
      {threads.map((item) => {
        return (
          <ThreadCard
            key={item.id}
            id={item.id}
            user={item.user}
            content={item.content}
            likes_count={item.likes_count}
            posted_at={item.posted_at}
            replies_count={item.replies_count}
            image={item.image}
            is_liked={item.is_liked}
          />
        );
      })}
    </>
  );
}
