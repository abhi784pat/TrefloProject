import classes from "./FilterButton.module.css";

const FilterButton = (props) => {
  const getFilteritems = (event) => {
    props.filterkeyword(event.target.value);
  };
  return (
    <div>
      <select
        className={classes.select}
        placeholder="Filter"
        onChange={getFilteritems}
      >
        <option value="" disabled>
          Filter..
        </option>
        <option value="all">All</option>
        <option value="high">High to Low</option>
        <option value="low">Low to High</option>
        <option value="highrating">Rating high to low</option>
        <option value="lowrating">Rating low to high</option>
      </select>
    </div>
  );
};

export default FilterButton;
