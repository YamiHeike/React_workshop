import type { Meta, StoryObj } from "@storybook/react";
import { FormWizard } from "./FormWizard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/FormWizard",
  component: FormWizard,
} satisfies Meta<typeof FormWizard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
