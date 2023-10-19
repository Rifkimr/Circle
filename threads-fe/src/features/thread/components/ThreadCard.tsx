import { IThreadCard } from "@/interfaces/thread";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useThreadCard } from "../hooks/useThreadCard";
import { AiFillHeart, AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import moment from "moment";

export function ThreadCard(props: IThreadCard) {
  const navigate = useNavigate();
  const { handlePostLike } = useThreadCard();

  return (
    <>
      <Box
        display={"flex"}
        width="100%"
        borderBottom={"1px solid grey"}
        padding={"20px"}
      >
        <Image
          src={props.user?.picture ?? "/user-placeholder.png"}
          width={"50px"}
          height={"50px"}
          objectFit={"cover"}
          borderRadius={"50%"}
          marginRight={"20px"}
          alt="user_profile_image"
        />

        <Box display={"flex"} flexDirection={"column"}>
          <Box
            cursor={"pointer"}
            onClick={() => navigate(`/detail/${props.id}`)}
          >
            <Box display={"flex"} flexDirection={"column"} gap={2}>
              <Box display={"flex"}>
                <Text>{props.user?.full_name}</Text>
                <Text color="brand.grey">
                  @{props.user?.username} &#9679;{" "}
                  {moment(props.posted_at).startOf("minute").fromNow()}
                </Text>
              </Box>
              <Text>{props.content}</Text>
              <Image src={props.image} alt="" />
            </Box>
          </Box>

          <Box
            display={"flex"}
            gap={5}
            marginTop={"10px"}
            justifyContent={"space-between"}
            // bg="red"
          >
            <Button
              pl={0}
              gap={"2"}
              variant="none"
              onClick={() => handlePostLike(props.id, props.is_liked)}
            >
              {props.is_liked ? (
                <AiFillHeart style={{ fontSize: "1.5em", color: "red" }} />
              ) : (
                <AiOutlineHeart style={{ fontSize: "1.5em", color: "black" }} />
              )}
              <Text color="brand.grey" ml={"5px"}>
                {props.likes_count} Like
              </Text>
            </Button>
            <Button pl={0} variant="none" gap={"2"}>
              <AiOutlineComment style={{ fontSize: "1.5em" }} />
              <Text color="brand.grey">{props.replies_count} Replies</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
