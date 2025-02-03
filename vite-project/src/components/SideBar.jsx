function SideBar() {
  return(
  <>
    <div className="box-side">
      <div className="car-selector">
        <button className="car"><img src="\src\photos\car.png" alt="" /></button>
        <button className="tractor"><img src="\src\photos\tractor.png" alt="" /></button>
        <button className="bike"><img src="\src\photos\moto.png" alt="" /></button>
      </div>
      <div className="properties">
        <label>გარიგების ტიპი</label>
          <select className="sale-type" name="" id="" value={1}>
            <option value="">იყიდება</option>
          </select>
          <label>მწარმოებელი</label>
          <select className="model" name="" id="" value={1}>
            <option value="">ყველა მწარმოებელი</option>
          </select>
          <label>კატეგორია</label>
          <select className="category" name="" id="" value={1}>
            <option value="">ყველა კატეგორია</option>
          </select>
      </div>
      <div className="price-selector">
        <div className="selector-top">
          <h6>ფასი</h6>

        </div>
        <div className="selector-bottom">
          <input placeholder="დან" type="text" />
          <span>-</span>
          <input placeholder="მდე" type="text" />
        </div>
      </div>
      <div className="search-btn">
        <button>ძებნა</button>
      </div>
    </div>
  </>
  )
}

export default SideBar;
