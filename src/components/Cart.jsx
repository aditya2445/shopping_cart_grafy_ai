import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import QuantityControl from "./QuantityControl";
import { Box, Button, Divider, Modal, Typography } from "@mui/material"
import "./Cart.css";
import FALLBACK_IMAGE from "../assets/cartImage.jpg"

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
};

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext
  (CartContext);

  const [open, setOpen] = useState(false);
  const [orderItems, setOrderItems] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setOrderItems(cart);
    setOrderTotal(total);
    clearCart();
    setOpen(true);
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>🛒 Cart</h2>
        <Button 
        disabled={cart.length === 0}
        onClick={handleCheckout}
        variant="contained">Checkout</Button>
      </div>
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-img"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = FALLBACK_IMAGE;
              }}
            />

            <div className="cart-item-info">
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>

              <QuantityControl
                maxQuantity={item.stock}
                quantity={item.quantity}
                onIncrease={() =>
                  updateQuantity(item.id, item.quantity + 1)
                }
                onDecrease={() =>
                  updateQuantity(item.id, item.quantity - 1)
                }
              />
            </div>
            <Button
              onClick={() => removeFromCart(item.id)} 
              variant="outlined" color="error">
              Remove
            </Button>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <h3>Total: ₹{total}</h3>
      </div>
      <Modal
        sx={{zIndex: 5000}}
        open={open}
        onClose={() => setOpen(false)}
      >
         <Box sx={modalStyle}>
          <Typography variant="h6" mb={2}>
            Order Confirmed.
          </Typography>

          {orderItems.map((item) => (
            <Typography key={item.id}>
              • {item.name} × {item.quantity}
            </Typography>
          ))}

          <Divider sx={{ my: 2 }} />

          <Typography fontWeight="bold">
            Total Paid: ₹{orderTotal}
          </Typography>

          <Button
            fullWidth
            sx={{ mt: 2 }}
            variant="contained"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
