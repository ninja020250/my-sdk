import React from "react";
import { IBox, IStack, IText } from "@components/Atom";
import { useColorModeValue } from "@chakra-ui/react";

export interface ITimelineItem {
  id: string;
  title: string;
  subtitle: string;
}

export type ITimelineItemProps = {
  children?: React.ReactNode;
} & ITimelineItem;

export const TimelineItem = ({ title, subtitle }: ITimelineItemProps) => {
  return (
    <IStack alignItems="center" width="fit-content" direction={["row", "column"]}>
      <IBox bg="teal.300" borderRadius="50%" h="16px" w="16px" />
      <IStack mt={2} alignItems="center" direction={["row", "column"]}>
        <IText>{title}</IText>
        <IBox
          position="relative"
          w={["60vw", "100px"]}
          h="100px"
          borderTopLeftRadius="lg"
          borderTopRightRadius={["0", "lg"]}
          borderBottomLeftRadius={["lg", "0"]}
          bgGradient={useColorModeValue(
            ["linear(to-r, teal.300, white)", "linear(teal.300, white)"],
            ["linear(to-r, teal.400, gray.800)", "linear(teal.400, gray.800)"]
          )}
        >
          <IBox position="absolute" left={4} top={4} w="200px">
            <IText fontWeight="semibold">{subtitle}</IText>
          </IBox>
        </IBox>
      </IStack>
    </IStack>
  );
};
