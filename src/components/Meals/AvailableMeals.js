import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import FilterButton from "../Layout/FilterButton";
import VegFilter from "../Layout/VegFilter";
const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [httperror, setHttperror] = useState(null);
  const [veg, setVeg] = useState(false);
  const [filter, setFilter] = useState("");
  const [filterResult, setFilterResult] = useState([]);

  const fetchdata = async () => {
    const res = await fetch(
      "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
    );
    if (!res.ok) {
      throw new Error("Something Went Wrong");
    }
    const responseData = await res.json();
    const loadedData = [];
    for (const key in responseData) {
      let type = responseData[key].isVeg === true ? "Veg" : "Nonveg";

      loadedData.push({
        id: responseData[key],
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
        type: type,
        rating: responseData[key].rating,
        img_url: responseData[key].img_url,
        isTopping: responseData[key].toppings,
      });
    }

    setMeals(loadedData);
    setIsloading(false);
  };

  const filterHandler = (filterstring) => {
    setFilter(filterstring);
    if (filterstring !== "") {
      if (filterstring === "high") {
        console.log("hi");
        let listdatan =
          veg === false
            ? meals.sort((a, b) => (a.price > b.price ? -1 : 1))
            : filterResult.sort((a, b) => (a.price > b.price ? -1 : 1));

        setFilterResult(listdatan);
      } else if (filterstring === "low") {
        let listdatan =
          veg === false
            ? meals.sort((a, b) => (a.price > b.price ? 1 : -1))
            : filterResult.sort((a, b) => (a.price > b.price ? 1 : -1));

        setFilterResult(listdatan);
      } else if (filterstring === "highrating") {
        let listdatan =
          veg === false
            ? meals.sort((a, b) => (a.rating > b.rating ? -1 : 1))
            : filterResult.sort((a, b) => (a.rating > b.rating ? -1 : 1));

        setFilterResult(listdatan);
      } else if (filterstring === "lowrating") {
        let listdatan =
          veg === false
            ? meals.sort((a, b) => (a.rating > b.rating ? 1 : -1))
            : filterResult.sort((a, b) => (a.rating > b.rating ? 1 : -1));

        setFilterResult(listdatan);
      } else {
        setFilterResult([]);
      }
    }
  };
  const vegHandler = (vegoption) => {
    setVeg(vegoption);
    if (vegoption === true) {
      if (filterResult.length !== 0) {
        let listdatan = filterResult.filter((val) => {
          return val.type === "Veg";
        });

        setFilterResult(listdatan);
        //setVeg(null);
      } else {
        let listdatan = meals.filter((val) => {
          return val.type === "Veg";
        });

        setFilterResult(listdatan);
      }
    }
    if (vegoption === false) {
      setVeg(vegoption);
      if (filter === "") {
        setFilterResult(meals);
      } else {
        let listdatan;
        if (filter === "high") {
          listdatan = meals.sort((a, b) => (a.price > b.price ? -1 : 1));
        } else if (filter === "low") {
          listdatan = meals.sort((a, b) => (a.price > b.price ? 1 : -1));
        } else if (filter === "highrating") {
          listdatan = meals.sort((a, b) => (a.rating > b.rating ? -1 : 1));
        } else if (filter === "lowrating") {
          listdatan = meals.sort((a, b) => (a.rating > b.rating ? 1 : -1));
        }
        setFilterResult(listdatan);
      }
    }
  };

  useEffect(() => {
    fetchdata().catch((error) => {
      setIsloading(false);
      setHttperror(error.message);
    });
  }, []);

  if (isloading) {
    return (
      <section className={classes.MealsLoading}>
        <p>...Loading</p>
      </section>
    );
  }
  if (httperror) {
    return (
      <section className={classes.MealsLoading}>
        <p>{httperror}</p>
      </section>
    );
  }

  var mealsList;
  if (filterResult.length === 0) {
    mealsList = meals.map((meal) => (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        type={meal.type}
        rating={meal.rating}
        img_url={meal.img_url}
        isTopping={meal.isTopping}
      />
    ));
  } else {
    mealsList = filterResult.map((meal) => (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        type={meal.type}
        rating={meal.rating}
        img_url={meal.img_url}
        isTopping={meal.isTopping}
      />
    ));
  }

  return (
    <section className={classes.meals}>
      <Card cart={false}>
        <div className={classes.filter}>
          <FilterButton filterkeyword={filterHandler} />

          <VegFilter vegkeyword={vegHandler} />
        </div>

        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
