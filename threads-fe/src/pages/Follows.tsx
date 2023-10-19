import { FollowCard } from "@/features/follow";
import { API } from "@/libs/api";
import { GET_FOLLOWS, SET_FOLLOW_STATE } from "@/stores/rootReducer";
import { RootState } from "@/stores/types/rootState";
import {
  Avatar,
  Box,
  Button,
  CardBody,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Follows() {
  const dispatch = useDispatch();
  const followState = useSelector(
    (state: RootState) => state.follow.followState
  );
  const follows = useSelector((state: RootState) => state.follow.follows);

  async function getFollowData() {
    const response = await API.get(`/follows?type=${followState}`);
    dispatch(GET_FOLLOWS(response.data));
  }

  useEffect(() => {
    getFollowData();
  }, [followState]);

  return (
    <>
      <Box display={"flex"} justifyContent={"center"}>
        <Tabs isFitted variant="enclosed" width="600px" marginTop={"20px"}>
          <TabList mb="1em">
            <Tab onClick={() => dispatch(SET_FOLLOW_STATE("followers"))}>
              Followers
            </Tab>
            <Tab onClick={() => dispatch(SET_FOLLOW_STATE("followings"))}>
              Followings
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              {/* 1 */}
              <Flex
                mt={"10px"}
                flex="1"
                gap="4"
                alignItems="center"
                flexWrap="wrap"
              >
                <Flex flex="1" gap="3" alignItems="center" flexWrap="wrap">
                  <Avatar
                    objectFit={"cover"}
                    name="Segun Adebayo"
                    src="https://images.unsplash.com/photo-1687360441205-807780a8e5db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  />
                  <Box>
                    <Heading fontSize={"sm"}>Amelia Smith</Heading>
                    <Text fontSize={"sm"} color={"grey"}>
                      @Amelia Smith
                    </Text>
                  </Box>
                </Flex>
                <Button
                  colorScheme="#5272F2"
                  type="submit"
                  borderRadius={"20px"}
                  bg={"#5272F2"}
                  color={"white"}
                >
                  Follow
                </Button>
              </Flex>
              {/* 2 */}
              <Flex
                mt={"20px"}
                flex="1"
                gap="4"
                alignItems="center"
                flexWrap="wrap"
              >
                <Flex flex="1" gap="3" alignItems="center" flexWrap="wrap">
                  <Avatar
                    objectFit={"cover"}
                    name="Segun Adebayo"
                    src="https://images.unsplash.com/photo-1682695794947-17061dc284dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  />
                  <Box>
                    <Heading fontSize={"sm"}>Ethan Johnson</Heading>
                    <Text fontSize={"sm"} color={"grey"}>
                      @Ethan Johnson
                    </Text>
                  </Box>
                </Flex>
                <Button
                  colorScheme="#5272F2"
                  type="submit"
                  borderRadius={"20px"}
                  bg={"#5272F2"}
                  color={"white"}
                >
                  Follow
                </Button>
              </Flex>
              {/* 3 */}
              <Flex
                mt={"20px"}
                flex="1"
                gap="4"
                alignItems="center"
                flexWrap="wrap"
              >
                <Flex flex="1" gap="3" alignItems="center" flexWrap="wrap">
                  <Avatar
                    objectFit={"cover"}
                    name="Segun Adebayo"
                    src="https://images.unsplash.com/photo-1687360440102-78d15c3e5045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  />
                  <Box>
                    <Heading fontSize={"sm"}>Olivia Brown</Heading>
                    <Text fontSize={"sm"} color={"grey"}>
                      @Olivia Brown
                    </Text>
                  </Box>
                </Flex>
                <Button
                  colorScheme="#5272F2"
                  type="submit"
                  borderRadius={"20px"}
                  bg={"#5272F2"}
                  color={"white"}
                >
                  Follow
                </Button>
              </Flex>
              <Flex
                mt={"20px"}
                flex="1"
                gap="4"
                alignItems="center"
                flexWrap="wrap"
              >
                <Flex flex="1" gap="3" alignItems="center" flexWrap="wrap">
                  <Avatar
                    objectFit={"cover"}
                    name="Segun Adebayo"
                    src="https://c4.wallpaperflare.com/wallpaper/12/1008/45/earth-4k-best-desktop-download-wallpaper-thumb.jpg"
                  />
                  <Box>
                    <Heading fontSize={"sm"}>Olivia Brown</Heading>
                    <Text fontSize={"sm"} color={"grey"}>
                      @Olivia Brown
                    </Text>
                  </Box>
                </Flex>
                <Button
                  colorScheme="#5272F2"
                  type="submit"
                  borderRadius={"20px"}
                  bg={"#5272F2"}
                  color={"white"}
                >
                  Follow
                </Button>
              </Flex>
              <Flex
                mt={"20px"}
                flex="1"
                gap="4"
                alignItems="center"
                flexWrap="wrap"
              >
                <Flex flex="1" gap="3" alignItems="center" flexWrap="wrap">
                  <Avatar
                    objectFit={"cover"}
                    name="Segun Adebayo"
                    src="https://c4.wallpaperflare.com/wallpaper/224/829/129/digital-digital-art-artwork-illustration-simple-hd-wallpaper-thumb.jpg"
                  />
                  <Box>
                    <Heading fontSize={"sm"}>Olivia Brown</Heading>
                    <Text fontSize={"sm"} color={"grey"}>
                      @Olivia Brown
                    </Text>
                  </Box>
                </Flex>
                <Button
                  colorScheme="#5272F2"
                  type="submit"
                  borderRadius={"20px"}
                  bg={"#5272F2"}
                  color={"white"}
                >
                  Follow
                </Button>
              </Flex>
              <Flex
                mt={"20px"}
                flex="1"
                gap="4"
                alignItems="center"
                flexWrap="wrap"
              >
                <Flex flex="1" gap="3" alignItems="center" flexWrap="wrap">
                  <Avatar
                    objectFit={"cover"}
                    name="Segun Adebayo"
                    src="https://c4.wallpaperflare.com/wallpaper/135/692/935/astronaut-space-black-background-artwork-hd-wallpaper-thumb.jpg"
                  />
                  <Box>
                    <Heading fontSize={"sm"}>Olivia Brown</Heading>
                    <Text fontSize={"sm"} color={"grey"}>
                      @Olivia Brown
                    </Text>
                  </Box>
                </Flex>
                <Button
                  colorScheme="#5272F2"
                  type="submit"
                  borderRadius={"20px"}
                  bg={"#5272F2"}
                  color={"white"}
                >
                  Follow
                </Button>
              </Flex>
            </TabPanel>
            <TabPanel>
              {follows.map((follow, index) => (
                <FollowCard
                  key={index}
                  id={follow.id}
                  user_id={follow.user_id}
                  full_name={follow.full_name}
                  username={follow.username}
                  email={follow.email}
                  picture={follow.picture}
                  description={follow.description}
                  is_followed={follow.is_followed}
                />
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}
