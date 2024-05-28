import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from "./ProductCard";

const meta = {
  title: "shared/ProductCard",
  component: ProductCard,
} satisfies Meta<typeof ProductCard>;

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
