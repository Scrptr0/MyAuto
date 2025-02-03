import { useState, useEffect } from "react";
import "./App.css";
import SideBar from "./components/SideBar.jsx";
import axios from "axios";

function App() {
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    axios.get("https://static.my.ge/myauto/js/mans.json").then((response) => {
        setManufacturers(response.data);
      }).catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <SideBar manufacturers={manufacturers} />
    </>
  );
}

export default App;