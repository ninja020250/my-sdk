import { IBox, IFlex, IHStack, ILink, IText } from "@components/Atom";
import { BrandLogo, ToggleColorButton, ToggleLanguageButton } from "@components/Molecule";
import NavigationMenuButton from "@components/Molecule/NavigationMenuButton";

export interface NavigationItem {
  id: string;
  url: string;
  name: string;
}

export type NavigationProps = {
  items: NavigationItem[];
  activeItem?: string;
  onChangeLanguage?: React.MouseEventHandler<HTMLButtonElement>;
  language?: string;
  baseUrl?: string;
};

export const Navigation = ({
  baseUrl = "/",
  items = [],
  activeItem = "",
  onChangeLanguage,
  language,
}: NavigationProps) => {
  return (
    <IFlex
      p={{
        base: "2",
        md: "4",
      }}
      h="64px"
      justifyContent="space-between"
      alignItems="center"
    >
      <IBox
        as={ILink}
        w="80px"
        // @ts-ignore
        href={baseUrl}
      >
        <BrandLogo />
      </IBox>
      <IHStack
        spacing={5}
        display={{
          base: "none",
          md: "flex",
        }}
      >
        {items.map(({ id, url, name }) => {
          return (
            <ILink key={id} href={url}>
              <IText fontWeight={activeItem === id ? "bold" : "light"}>{name}</IText>
            </ILink>
          );
        })}
      </IHStack>
      <IHStack w="80px" justifyContent="end" spacing={2}>
        <ToggleLanguageButton onClick={onChangeLanguage} language={language} />
        <ToggleColorButton />
        <IBox
          display={{
            base: "block",
            md: "none",
          }}
        >
          <NavigationMenuButton items={items} activeItem={activeItem} />
        </IBox>
      </IHStack>
    </IFlex>
  );
};

export default Navigation;
