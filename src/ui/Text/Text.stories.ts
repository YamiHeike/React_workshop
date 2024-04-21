import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Text",
  component: Text,
  //tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Hello amigos!",
  },
};

export const Secondary: Story = {
  args: {
    children: "No zarycz, no!",
  },
};
