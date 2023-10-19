import { Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";
import SidebarLeftNew from "@/layouts/SidebarLeft";
import SidebarRight from "@/layouts/SidebarRight";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <>
      <Grid templateColumns="repeat(12, 1fr)">
        <GridItem colSpan={3} borderRight={"1px"} borderColor={"grey"}>
          <SidebarLeftNew />
        </GridItem>
        <GridItem colSpan={5}>{children}</GridItem>
        <GridItem colSpan={4} borderLeft={"1px"} borderColor={"grey"}>
          <SidebarRight />
        </GridItem>
      </Grid>
    </>
  );
}
