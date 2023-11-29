// AboutMeCard.stories.ts|tsx
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import SkillCard from "../../components/Organism/SkillCard";
import SkillCardListAnimation, {
  CardCompactMotionDiv,
} from "../../components/Organism/SkillCard/SkillCardListAnimation";
import { IVStack } from "../../components/Atom";
import { title } from "process";

const meta: Meta<typeof SkillCard> = {
  component: SkillCard,
  title: "PortfolioUI/Organism/SkillCard",
};

export default meta;
type Story = StoryObj<typeof SkillCard>;

export const Primary: Story = {
  render: () => (
    <SkillCard
      id="skill-card"
      title="Javascript/Typescript"
      subTitle="5 Years"
      description={`
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500
  `}
    />
  ),
};

export const Compact: Story = {
  render: () => <SkillCard id="skill-card-compact" title="Javascript/Typescript" subTitle="5 Years" />,
};

export const List: Story = {
  render: () => (
    <SkillCardListAnimation
      itemRender={(item, onClick) => {
        return (
          <CardCompactMotionDiv id={item.id}>
            <SkillCard {...item} onClick={onClick} description="" />
          </CardCompactMotionDiv>
        );
      }}
      items={items}
    />
  ),
};

export const items = [
  {
    id: "0",
    title: "Javascript/Typescript",
    subTitle: "5 Years",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500`,
  },
  {
    id: "1",
    title: "Javascript/Typescript 2",
    subTitle: "5 Years",
    description: `2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500`,
  },
  {
    id: "2",
    title: "Javascript/Typescript 2",
    subTitle: "5 Years",
    description: `2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500`,
  },
  {
    id: "3",
    title: "Javascript/Typescript 2",
    subTitle: "5 Years",
    description: `2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500`,
  },
  {
    id: "4",
    title: "Javascript/Typescript 2",
    subTitle: "5 Years",
    description: `2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500`,
  },
  {
    id: "5",
    title: "Javascript/Typescript 2",
    subTitle: "5 Years",
    description: `2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500`,
  },
];
