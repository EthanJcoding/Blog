import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "./Paragraph";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Paragraph> = {
  title: "Atoms/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Primary: Story = {
  args: {
    size: "default",
    children: "Paragraph",
  },
};

export const Secondary: Story = {
  args: {
    size: "default",
    children: "Paragraph",
  },
};
