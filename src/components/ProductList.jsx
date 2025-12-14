import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div>
      <h2>Products</h2>
      <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"20px", padding:"10px"}}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
