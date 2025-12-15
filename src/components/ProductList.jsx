import { useEffect, useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Box, FormControl, InputLabel, MenuItem, Select, Slider, Typography } from "@mui/material"
export default function ProductList() {
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState(7000);
  const [filterOpen, setFilterOpen] = useState(false);
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
    category === "All" || product.category === category;
    const priceMatch = product.price <= price;
    return categoryMatch && priceMatch;
  })
  // console.log(filteredProducts)
  return (
    <>
    <Box
      sx={{display: "flex",
        justifyContent: "space-between",
        padding: "0px 12px",
        marginBottom: "5px",
      }}
    >
      <Typography sx={{fontSize: "20px"}} variant="body2">Products</Typography>
      <FilterListIcon
        style={{cursor: "pointer"}} 
        onClick = {() => setFilterOpen(prev => !prev)}
      />
    </Box>
    {
      filterOpen && 
      (
        <Box
        sx={{
          display: "flex",
          gap: 3,
          alignItems: "center",
          mb: 3
        }}
      >
        <FormControl 
          size="small" 
          sx={{minWidth: 200}}
        >
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Furniture">Furniture</MenuItem>
          </Select>
        </FormControl>
        <Box
          sx={{width:200}}
        >
          <Typography variant="body2">
            Max Price: Rs.{price}
          </Typography>
          <Slider
            value={price}
            onChange={(e, val) => setPrice(val)}
            min={200}
            max={7000}
            step={500}
            valueLabelDisplay="auto"
          />
        </Box>
      </Box>
      )
    }
    {
      filteredProducts.length === 0 &&
      <Typography>No Products Found</Typography>
    }
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 2
        }}
      >
        {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
      </Box>
    </>
  );
}
