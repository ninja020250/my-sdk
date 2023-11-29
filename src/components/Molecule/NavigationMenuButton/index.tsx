import { IMenu, IMenuButton, IMenuItem, IMenuList, IIconButton, IIcon, ILink, IText } from "@components/Atom";
import { BsList } from "react-icons/bs";

export interface NavigationItem {
  id: string;
  url: string;
  name: string;
}

export type NavigationMenuButtonProps = {
  items: NavigationItem[];
  activeItem?: string;
};

export const NavigationMenuButton = ({ items, activeItem }: NavigationMenuButtonProps) => {
  return (
    <IMenu>
      <IMenuButton
        as={IIconButton}
        // @ts-ignore
        variant="outline"
        icon={<IIcon fontSize="24px" as={BsList} />}
      />
      <IMenuList>
        {(items ?? []).map(({ id, url, name }) => {
          return (
            <IMenuItem
              as={ILink}
              key={id}
              // @ts-ignore
              href={url}
            >
              <IText fontWeight={activeItem === id ? "bold" : "light"}>{name}</IText>
            </IMenuItem>
          );
        })}
      </IMenuList>
    </IMenu>
  );
};

export default NavigationMenuButton;
