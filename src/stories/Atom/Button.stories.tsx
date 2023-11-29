// Button.stories.ts|tsx
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import IButton from "../../components/Atom/IButton";

const meta: Meta<typeof IButton> = {
  component: IButton,
  title: "PortfolioUI/Atom/IButton",
};

export default meta;
type Story = StoryObj<typeof IButton>;

export const Primary: Story = {
  render: () => <IButton colorScheme="blue">Button</IButton>,
};
