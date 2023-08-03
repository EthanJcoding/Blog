import type { Meta, StoryObj } from "@storybook/react";
import Grid_Section from "./Grid_Section";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Grid_Section> = {
  title: "Organisms/Grid_Section",
  component: Grid_Section,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Grid_Section>;

export const Primary: Story = {
  args: {},
};
