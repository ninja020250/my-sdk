// Navigation.stories.ts|tsx
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import ApplicationTabList from "../../components/Molecule/ApplicationTabList";
import ITabs from "../../components/Atom/Tab/ITabs";
import ITabPanels from "../../components/Atom/Tab/ITabPanels";
import ITabPanel from "../../components/Atom/Tab/ITabPanel";

const meta: Meta<typeof ApplicationTabList> = {
  component: ApplicationTabList,
  title: "PortfolioUI/Molecule/ApplicationTabList",
};

export default meta;
type Story = StoryObj<typeof ApplicationTabList>;

export const Primary: Story = {
  render: () => (
    <ITabs position="relative" variant="unstyled" colorScheme="gray">
      <ApplicationTabList
        items={[
          {
            id: "0",
            name: "Develop",
          },
          {
            id: "1",
            name: "Soft skills & others",
          },
        ]}
      />
    </ITabs>
  ),
};
