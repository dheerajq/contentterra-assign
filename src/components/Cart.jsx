import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const Cart = ({ data }) => {
  const [html, setHtml] = useState("");
  const html_data = data.data.selftext_html;
  useEffect(() => {
    const element = document.createElement("div");
    element.innerHTML = html_data;
    const plainText = element.textContent;
    setHtml(plainText);
  }, []);

  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          m: {
            xs: 2,
            sm: 2,
            md: 5,
            lg: 5,
          },
          p: {
            xs: 2,
            sm: 2,
            md: 5,
            lg: 5,
          },
          position: "relative",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", font: "extrabold" }}
            gutterBottom
            fontWeight="bold"
          >
            {data.data.title}
          </Typography>
          <Typography
            sx={{ fontSize: "24px" }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Typography>{data.data.url}</Typography>
          <a href={data.data.url} target="_blank">
            {data.data.url}
          </a>
        </CardContent>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            p: 2,
            m: 2,
          }}
        >
          {data.data.score}
        </Button>
      </Card>
    </>
  );
};

export default Cart;
