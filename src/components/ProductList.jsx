import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div 
    style={{height: "calc(100vh - 140px)",
        overflowY: "auto",
        padding: "10px",}}
    >
      <h2>Products</h2>
      <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"20px", padding:"10px"}}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
