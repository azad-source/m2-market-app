import type { Meta, StoryObj } from "@storybook/react";
import CurrencyDetails from "./CurrencyDetails";

const meta = {
  title: "shared/CurrencyDetails",
  component: CurrencyDetails,
} satisfies Meta<typeof CurrencyDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    currency: {
      info: { a: [], b: [], c: [], h: [], l: [], o: "", p: [], t: [], v: [] },
      name: "ETHUSD",
    },
  },
};
