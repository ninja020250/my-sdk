import { SystemStyleObject, useColorModeValue } from "@chakra-ui/react";
import { ITab, ITabIndicator, ITabList, IText } from "@components/Atom";
import { useITheme } from "@hooks/index";

export interface IApplicationTabListItem {
  id: string;
  name: string;
}

export type ApplicationTabListProps = {
  items: IApplicationTabListItem[];
  tabIndex?: number;
  sx?: SystemStyleObject;
};

export const ApplicationTabList = ({ items, sx }: ApplicationTabListProps) => {
  const theme = useITheme();

  return (
    <>
      <ITabList position="relative" bg={theme.colors.bg.subtle} py={0} px={1} borderRadius="lg" w="fit-content" sx={sx}>
        {(items ?? []).map((item) => {
          return (
            <ITab
              key={item.id}
              p={2}
              zIndex={1}
              px={4}
              py={2}
              color={useColorModeValue("gray.500", "gray.400")}
              _selected={{ color: useColorModeValue("gray.700", "white") }}
            >
              <IText fontSize="md">{item.name}</IText>
            </ITab>
          );
        })}
        <ITabIndicator
          position="absolute"
          bg={useColorModeValue("white", "gray.600")}
          borderRadius="md"
          h="var(--chakra-space-8)"
          mt="calc(var(--chakra-space-10) * - 1)"
          boxShadow="sm"
          top="var(--chakra-space-1)"
        />
      </ITabList>
    </>
  );
};

export default ApplicationTabList;
