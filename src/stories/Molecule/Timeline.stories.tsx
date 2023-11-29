// Navigation.stories.ts|tsx
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import Timeline from "../../components/Molecule/Timeline";

const meta: Meta<typeof Timeline> = {
  component: Timeline,
  title: "PortfolioUI/Molecule/Timeline",
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Primary: Story = {
  render: () => (
    <Timeline
      items={[
        {
          id: "0",
          title: "1997",
          subtitle: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
          id: "1",
          title: "1997",
          subtitle: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
          id: "2",
          title: "1997",
          subtitle: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
          id: "3",
          title: "1997",
          subtitle: "Lorem Ipsum is simply dummy text of the printing",
        },
      ]}
    />
  ),
};
