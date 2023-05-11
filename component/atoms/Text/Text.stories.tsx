import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    size: "name",
    children: "Text",
  },
};

export const Secondary: Story = {
  args: {
    size: "title",
    children: "Text",
  },
};
