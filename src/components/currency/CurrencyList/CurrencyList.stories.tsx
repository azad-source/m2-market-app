import type { Meta, StoryObj } from "@storybook/react";
import CurrencyList from "./CurrencyList";

const meta = {
  title: "shared/CurrencyList",
  component: CurrencyList,
} satisfies Meta<typeof CurrencyList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    currencies: [],
  },
};
