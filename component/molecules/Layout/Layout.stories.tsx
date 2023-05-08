import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./Layout";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Layout> = {
  title: "Molecules/Layout",
  component: Layout,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Layout>;

export const Primary: Story = {
  args: {},
};
