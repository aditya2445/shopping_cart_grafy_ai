import { IconButton, Typography, Box, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function QuantityControl({ maxQuantity, quantity, onIncrease, onDecrease }) {
  return (
    <Box display="flex" alignItems="center">
      <IconButton
        size="small"
        onClick={onDecrease}
      >
        <RemoveIcon />
      </IconButton>

      <Typography sx={{ mx: 1 }}>
        {quantity}
      </Typography>
      <Tooltip arrow title={quantity < maxQuantity ? "" : "Max Quantity Reached"}>
        <span>
          <IconButton
            size="small"
            onClick={onIncrease}
            disabled = {quantity < maxQuantity ? false : true}
          >
            <AddIcon />
          </IconButton>
        </span>
      </Tooltip>
    </Box>
  );
}