import type { Meta, StoryObj } from "@storybook/react";
import { Profile } from "./Profile";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Profile> = {
  title: "Molecules/Profile",
  component: Profile,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Primary: Story = {
  args: {},
};
