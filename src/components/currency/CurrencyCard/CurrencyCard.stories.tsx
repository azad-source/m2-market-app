import type { Meta, StoryObj } from "@storybook/react";
import CurrencyCard from "./CurrencyCard";

const meta = {
  title: "shared/CurrencyCard",
  component: CurrencyCard,
} satisfies Meta<typeof CurrencyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    card: {
      info: { a: [], b: [], c: [], h: [], l: [], o: "", p: [], t: [], v: [] },
      name: "ETHUSD",
    },
  },
};
