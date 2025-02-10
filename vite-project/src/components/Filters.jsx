import React from "react";

function Filters({
  saleType,
  setSaleType,
  selectedManufacturer,
  setSelectedManufacturer,
  manufacturers,
  category,
  setCategory,
  categories,
}) {
  return (
    <div className="properties">
      {/* გაყიდვის ტიპი */}
      <label>გარიგების ტიპი</label>
      <select
        className="sale-type"
        value={saleType}
        onChange={(e) => setSaleType(e.target.value)}>
        <option value="1">იყიდება</option>
        <option value="2">ქირავდება</option>

      </select>

      {/* მწარმოებელი */}
      <label>მწარმოებელი</label>
      <select
        className="model"
        value={selectedManufacturer}
        onChange={(e) => setSelectedManufacturer(e.target.value)}
      >
        <option value="">ყველა მწარმოებელი</option>
        {manufacturers.map((brand) => (
          <option key={brand.man_id} value={brand.man_id}>
            {brand.man_name}
          </option>
        ))}
      </select>

      {/* კატეგორია */}
      <label>კატეგორია</label>
      <select
        className="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">ყველა კატეგორია</option>
        {categories.map((cat) => (
          <option key={cat.category_id} value={cat.category_id}>
            {cat.title}
          </option>
        ))}
      </select>

    </div>
  );
}

export default Filters;
