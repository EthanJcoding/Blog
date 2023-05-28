import type { Meta, StoryObj } from "@storybook/react";
import { Archive_Grid } from "./Archive_Grid";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Archive_Grid> = {
  title: "Molecules/Archive_Grid",
  component: Archive_Grid,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Archive_Grid>;

export const Primary: Story = {
  args: {},
};
