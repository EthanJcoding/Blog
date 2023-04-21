import type { Meta, StoryObj } from "@storybook/react";
import { ImageLayout } from "./ImageLayout";

import profile from "../../../public/profile.jpg";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ImageLayout> = {
  title: "Atoms/Image",
  component: ImageLayout,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ImageLayout>;

export const Rounded: Story = {
  args: {
    src: profile,
    alt: "profile",
  },
};

export const Squared: Story = {
  args: {
    src: profile,
    alt: "profile",
    size: "squared",
  },
};
