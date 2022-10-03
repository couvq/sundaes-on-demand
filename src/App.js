import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

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
      <p data-testid='userId'>{data.userId}</p>
      <p data-testid='title'>{data.title}</p>
    </>
  );
}

export default App;
