import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    intent: "default",
    size: "default",
    children: "Button",
  },
};

export const Hi: Story = {
  args: {
    intent: "default",
    size: "default",
    children: "Button",
    icon: "FaGithubSquare",
  },
};
