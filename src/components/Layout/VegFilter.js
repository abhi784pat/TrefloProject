import { useState } from "react";
import "./VegFilter.css";
const VegFilter = (props) => {
  const [isveg, setVeg] = useState(false);

  const getVegitems = (event) => {
    props.vegkeyword(!isveg);

    //console.log(isveg);

    setVeg(!isveg);
  };
  return (
    <div className="container">
      <span className="Veg">Veg</span>
      <span>
        <label className="toggle-switch">
          <input type="checkbox" checked={isveg} onChange={getVegitems} />
          <span className="switch"></span>
        </label>
      </span>
    </div>
  );
};

export default VegFilter;
