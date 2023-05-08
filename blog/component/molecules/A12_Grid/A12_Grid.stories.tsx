import type { Meta, StoryObj } from "@storybook/react";
import { A12_Grid } from "./A12_Grid";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof A12_Grid> = {
  title: "Moleculs/A12_Grid",
  component: A12_Grid,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof A12_Grid>;

export const Primary: Story = {
  args: {
    project: "악보의 정원",
    stacks: [
      { stack: "react", color: "149ECA" },
      { stack: "typescript", color: "3178C6" },
      { stack: "firebase", color: "FFCA28" },
      { stack: "redux", color: "764ABC" },
      { stack: "sass", color: "CC6699" },
    ],
  },
};
