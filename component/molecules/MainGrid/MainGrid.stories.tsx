import type { Meta, StoryObj } from "@storybook/react";
import MainGrid from "./MainGrid";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof MainGrid> = {
  title: "Molecules/MainGrid",
  component: MainGrid,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MainGrid>;

export const Primary: Story = {
  args: {},
};
