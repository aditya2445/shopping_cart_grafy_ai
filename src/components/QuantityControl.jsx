export default function QuantityControl({ maxQuantity, quantity, onIncrease, onDecrease }) {
  return (
    <div style={styles.container}>
        {
            quantity > 0 &&
            <button onClick={onDecrease} style={styles.btn}>−</button>
        }
      <span style={styles.qty}>{quantity}</span>
        {
          <button disabled = {quantity < maxQuantity ? false : true} onClick={onIncrease} style={styles.btn}>+</button>
        }
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    justifyContent: "center",
  },
  btn: {
    padding: "4px 10px",
    fontSize: "16px",
    cursor: "pointer",
  },
  qty: {
    minWidth: "20px",
    textAlign: "center",
    fontWeight: "bold",
  },
};
