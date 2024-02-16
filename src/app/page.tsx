import { getData } from "./api/getProducts";
import { ProductsList } from "./components/ProductsList/ProductsList";

export default async function Home() {
  const products = await getData()
  return (
    <main>
      <ProductsList products={products} />
    </main>
  );
}
