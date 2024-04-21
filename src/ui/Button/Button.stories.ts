import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Button",
  component: Button,
  //tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = {
  args: {
    label: "Keep calm and Carpe Diem",
    className:
      "px-4 py-3 text-white bg-blue-600 text-sm border-blue-200 rounded hover:bg-blue-500",
    onClick: () => {
      alert("Always look at the bright side of life! :)");
    },
  },
};

export const Red: Story = {
  args: {
    label: "SHUT UP AND TAKE MY MONEY",
    className:
      "px-4 py-1 text-white bg-red-700 text-xl border-red-200 rounded-md shadow-md hover:bg-red-600",
    onClick: () => {
      alert("You shall not pass!");
    },
  },
};

export const Green: Story = {
  args: {
    label: "#SpreadLove",
    className:
      "px-4 py-2 bg-green-500 text-white text-md border-green-900 rounded-xl shadow-xl font-thin hover:bg-green-300 hover:text-black",
    onClick: () => {
      alert("Peace!");
    },
  },
};
