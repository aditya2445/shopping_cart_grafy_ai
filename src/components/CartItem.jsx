import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div>
      <span>{item.name}</span>
      <input
        type="number"
        value={item.quantity}
        min="1"
        onChange={(e) => updateQuantity(item.id, +e.target.value)}
      />
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}
