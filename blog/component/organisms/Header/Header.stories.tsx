import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Header> = {
  title: "molecules/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    intent: "default",
    size: "default",
  },
};
