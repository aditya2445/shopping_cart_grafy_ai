import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import QuantityControl from "./QuantityControl";

export default function ProductCard({ product }) {
  const { cart, addToCart, updateQuantity } = useContext(CartContext);

  const cartItem = cart.find(item => item.id === product.id);

  return (
    <div style={cardStyle}>
      <img src={product.image} alt={product.name} style={imgStyle} />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>

      {!cartItem ? (
        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      ) : (
        <QuantityControl
          maxQuantity={cartItem.stock}
          quantity={cartItem.quantity}
          onIncrease={() =>
            updateQuantity(product.id, cartItem.quantity + 1)
          }
          onDecrease={() =>
            updateQuantity(product.id, cartItem.quantity - 1)
          }
        />
      )}
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  padding: "12px",
  borderRadius: "6px",
  textAlign: "center",
};

const imgStyle = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
};
