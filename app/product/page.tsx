import ProductsShowcase from "../../components/sections/ProductsShowcase";

export const metadata = {
  title: "Products - Joba Coffee",
  description: "Explore our complete range of premium roasted coffee products.",
};

export default function ProductPage() {
  return (
    <main>
      <ProductsShowcase />
    </main>
  );
}
