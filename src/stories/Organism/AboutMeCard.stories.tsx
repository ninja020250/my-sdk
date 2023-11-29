// AboutMeCard.stories.ts|tsx
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import AboutMeCard from "../../components/Organism/AboutMeCard";
import Carousel from "../../components/Molecule/Carousel";
import IIcon from "../../components/Atom/IIcon";
import ITabPanel from "../../components/Atom/Tab/ITabPanel";
import { BsBookmarkStar } from "react-icons/bs";

const meta: Meta<typeof AboutMeCard> = {
  component: AboutMeCard,
  title: "PortfolioUI/Organism/AboutMeCard",
};

export default meta;
type Story = StoryObj<typeof AboutMeCard>;

export const Primary: Story = {
  render: () => (
    <Carousel>
      <ITabPanel>
        <AboutMeCard
          icon={<IIcon as={BsBookmarkStar} />}
          title="Kinh nghiệm"
          subTitle="5 years working"
          description={`
 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  `}
        />
      </ITabPanel>
      <ITabPanel>
        <AboutMeCard
          icon={<IIcon as={BsBookmarkStar} />}
          title="Kinh nghiệm"
          subTitle="5 years working"
          description={`
 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type spe
  `}
        />
      </ITabPanel>
      <ITabPanel>
        <AboutMeCard
          icon={<IIcon as={BsBookmarkStar} />}
          title="Kinh nghiệm"
          subTitle="5 years working"
          description={`
 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
   It has survived not only five centuries, but also the leap into electronic typesetting, 
   remaining essentially unchanged. It was popularised in
    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
  `}
        />
      </ITabPanel>
    </Carousel>
  ),
};
