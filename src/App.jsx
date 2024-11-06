import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Header from "./components/Header";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://site--deliveroo-backend--wmhs7j45p7n2.code.run/");

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    }
    fetchData();
  }, []);

  return isLoading ? <span>En cours de chargement...</span> : (
    <>
      <Header />
      <h2>{data.restaurant.name}</h2>
    </>
  )
}

export default App
