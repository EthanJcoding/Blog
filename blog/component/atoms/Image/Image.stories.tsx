import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "./Image";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Image> = {
  title: "Atoms/Image",
  component: Image,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Primary: Story = {
  args: {
    intent: "round",
    size: "default",
  },
};
