import type { Meta, StoryObj } from "@storybook/react";
import { Git_Status } from "./Git_Status";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Git_Status> = {
  title: "Atoms/Git_Status",
  component: Git_Status,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Git_Status>;

export const Primary: Story = {
  args: {},
};
