import type { Meta, StoryObj } from "@storybook/react";
import ProductDetails from "./ProductDetails";

const meta = {
  title: "shared/ProductDetails",
  component: ProductDetails,
} satisfies Meta<typeof ProductDetails>;

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
