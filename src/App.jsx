import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { useState } from "react";

export default function App() {
  const [isCartActive, setIsCartActive] = useState(false);

  return (
    <div style={{ overflow: "hidden" }}>
      <header
        style={{
          position: "sticky",
          top: "2px",
          backgroundColor: "white",
          width: "85vw",
          margin: "10px auto",
          border: "2px solid black",
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 10px",
          alignItems: "center",
          borderRadius: "12px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
          zIndex: 1000,
        }}
      >
        <h1>Shopping Cart</h1>
        <div
          style={{ fontSize: "30px", cursor: "pointer" }}
          onClick={() => setIsCartActive(true)}
        >
          🛒
        </div>
      </header>
      <div style={{ width: "85vw", margin: "0 auto" }}>
        <ProductList />
      </div>
      {isCartActive && (
        <>
          <div
            onClick={() => setIsCartActive(false)}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(4px)",
              zIndex: 2000,
            }}
          />
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              height: "100vh",
              width: "40vw",
              backgroundColor: "white",
              boxShadow: "-10px 0 30px rgba(0,0,0,0.25)",
              zIndex: 3000,
              padding: "20px",
              borderTopLeftRadius: "16px",
              borderBottomLeftRadius: "16px",
              transform: "translateX(0)",
              transition: "transform 0.3s ease",
            }}
          >
            <Cart />
          </div>
        </>
      )}
    </div>
  );
}
