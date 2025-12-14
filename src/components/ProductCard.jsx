import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import QuantityControl from "./QuantityControl";
import FALLBACK_IMAGE from "../assets/cartImage.jpg"
import { Button, TextField } from "@mui/material";

export default function ProductCard({ product }) {
  const { cart, addToCart, updateQuantity } = useContext(CartContext);

  const cartItem = cart.find(item => item.id === product.id);

  return (
    <div style={cardStyle}>
      <img 
      src={product.image}
      alt={product.name} 
      style={imgStyle} 
      onError={(e) => {
        e.target.onError = null;
        e.target.src = FALLBACK_IMAGE;
      }}
      />
      <h4
      style={{fontFamily:"sans-serif", fontSize: "18px"}}
      >{product.name}</h4>
      <div style={{display: "flex", justifyContent:"space-around", alignItems: "center"}}>
        <p
        style={{fontFamily: "sans-serif", fontWeight:"bold"}}
        >₹{product.price}</p>
        
        {!cartItem ? (
          <Button 
          onClick={() => addToCart(product)}
          variant="contained">Add to cart</Button>
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
  borderRadius: "10px",
};
