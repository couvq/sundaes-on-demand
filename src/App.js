import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import SuggestedProducts from "./components/SuggestedProducts";

const fakeFetch = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fakeFetch().then((data) => setData(data));
  }, []);

  return (
    <>
     <Box>
       <Typography>Suggested Products for you...</Typography>
       <SuggestedProducts />
     </Box>
    </>
  );
}

export default App;
