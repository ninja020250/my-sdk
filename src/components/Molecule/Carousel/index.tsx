import { useColorModeValue } from "@chakra-ui/react";
import { IBox, IFlex, IIcon, IIconButton, ITab, ITabList, ITabPanels, ITabs } from "@components/Atom";
import useITabController from "@hooks/useITabController";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export type CarouselProps = {
  children?: React.ReactNode[];
};

function Carousel({ children }: CarouselProps) {
  const tabsLength = Array.isArray(children) ? children.length : 0;
  const { back, next, tabIndex, handleTabsChange } = useITabController({ tabsLength });

  return (
    <IFlex alignItems="center">
      <IIconButton
        onClick={back}
        variant="link"
        aria-label="prev"
        color={useColorModeValue("gray.700", "gray.100")}
        icon={
          <IIcon
            fontSize="24px"
            // @ts-ignore
            as={BsChevronLeft}
          />
        }
      />
      <ITabs w="100%" position="relative" variant="unstyled" index={tabIndex} onChange={handleTabsChange}>
        <ITabPanels>{children}</ITabPanels>
        <ITabList mt={5} sx={{ display: "flex", justifyContent: "center" }}>
          {Array.from({ length: tabsLength }, (_, i) => {
            const bg = tabIndex === i ? "teal.300" : "gray.100";
            return (
              <ITab key={i as number} p={2}>
                <IBox height="8px" width="8px" bg={bg} borderRadius="8px" />
              </ITab>
            );
          })}
        </ITabList>
      </ITabs>
      <IIconButton
        onClick={next}
        variant="link"
        aria-label="next"
        color={useColorModeValue("gray.700", "gray.100")}
        icon={
          <IIcon
            fontSize="24px"
            // @ts-ignore
            as={BsChevronRight}
          />
        }
      />
    </IFlex>
  );
}

Carousel.propTypes = {};

export default Carousel;
