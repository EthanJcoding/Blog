import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof IconButton> = {
  title: "Molecules/IconButton",
  component: IconButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    size: "default",
    children: "IconButton",
  },
};
