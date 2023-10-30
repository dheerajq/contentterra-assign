import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";

const Hero = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://www.reddit.com/r/reactjs.json");
      const response = await data.json();

      const redditPosts = response.data.children;

      setData(redditPosts);
    };
    fetchData();
  }, []);
  return (
    <Box sx={{ backgroundColor: "black", color: "white", alignItem: "center" }}>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        HAPPY LEARNING
      </Typography>
      <Box>
        {data.map((datas, index) => (
          <Cart key={index} data={datas} />
        ))}
      </Box>
      <Box>
        <Typography sx={{ textAlign: "center", fontSize: "24px" }}>
          created by dheeraj kumar
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
