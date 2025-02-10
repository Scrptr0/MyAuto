import { useState, useEffect } from "react";
import "./App.css";
import SideBar from "./components/SideBar.jsx";
import { fetchManufacturers, fetchCategories } from "./components/api.jsx"; // Update the path here

function App() {
  const [manufacturers, setManufacturers] = useState([]);
  const [vehicleType, setVehicleType] = useState("car");
  const [saleType, setSaleType] = useState("");
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  // Fetch manufacturers and categories
  useEffect(() => {
    fetchManufacturers().then(setManufacturers);
    fetchCategories().then(setCategories);
  }, []);

  // Filter manufacturers based on selected vehicle type
  const filteredManufacturers = manufacturers.filter((brand) => {
    if (vehicleType === "car") return brand.is_car === "1";
    if (vehicleType === "tractor") return brand.is_spec === "1";
    if (vehicleType === "moto") return brand.is_moto === "1";
    return true;
  });

  return (
    <div>
      <SideBar
        setVehicleType={setVehicleType}
        saleType={saleType}
        setSaleType={setSaleType}
        selectedManufacturer={selectedManufacturer}
        setSelectedManufacturer={setSelectedManufacturer}
        category={category}
        setCategory={setCategory}
        manufacturers={filteredManufacturers}
        categories={categories}
      />
    </div>
  );
}

export default App;
