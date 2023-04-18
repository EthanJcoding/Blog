import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Header> = {
  title: "Organisms/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    children: "This is header",
  },
};
