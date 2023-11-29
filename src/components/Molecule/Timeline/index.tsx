import { IBox, IStack } from "@components/Atom";
import type { ITimelineItem } from "./TimelineItem";
import { TimelineItem } from "./TimelineItem";

export type TimelineProps = {
  items: ITimelineItem[];
};

export const Timeline = ({ items }: TimelineProps) => {
  return (
    <IStack direction={["row", "column"]} justifyContent="start" display="flex">
      <IBox margin={["50px 0 50px 0", "auto"]} bg="teal.300" w={["2px", "calc(100% - 100px)"]} h={["auto", "2px"]} />
      <IStack
        spacing={6}
        direction={["column", "row"]}
        w="100%"
        justifyContent="space-between"
        mt={["0", "-16px"]}
        ml={["-17px", "0"]}
      >
        {items.map((item) => {
          return <TimelineItem {...item} />;
        })}
      </IStack>
    </IStack>
  );
};

export default Timeline;
