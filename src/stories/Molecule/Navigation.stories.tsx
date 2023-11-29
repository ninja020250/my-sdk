// Navigation.stories.ts|tsx
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import Navigation from "../../components/Molecule/Navigation";

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  title: "PortfolioUI/Molecule/Navigation",
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Primary: Story = {
  render: () => (
    <Navigation
      language="EN"
      onChangeLanguage={() => {
        alert("You just click to change language");
      }}
      activeItem="0"
      items={[
        {
          id: "0",
          url: "/",
          name: "Home",
        },
        {
          id: "1",
          url: "/works",
          name: "Works",
        },
        {
          id: "2",
          url: "/about",
          name: "About This Website",
        },
      ]}
    />
  ),
};
