import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    icon: "FaSearch",
  },
};
