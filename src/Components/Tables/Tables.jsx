import { useReducer, useState } from "react";
import snacks from "../../Data/Snaks.data";
import "./Tables.css";

const INTIAL_STATE = {
  snacksData: snacks,
};

const snackReducer = (state, action) => {
  switch (action.type) {
    case "SORT__price__in__Asc":
      return {
        ...state,
        snacksData: [...state.snacksData].sort((a, b) => a.price - b.price),
      };
    case "SORT__price__sort__in__Desc":
      return {
        ...state,
        snacksData: [...state.snacksData].sort((a, b) => b.price - a.price),
      };

    case "SORT__ID__in__Asc":
      return {
        ...state,
        snacksData: [...state.snacksData].sort((a, b) => a.id - b.id),
      };
    case "SORT__ID__sort__in__Desc":
      return {
        ...state,
        snacksData: [...state.snacksData].sort((a, b) => b.id - a.id),
      };

    case "SORT__Name__in__Asc":
      return {
        ...state,
        snacksData: [...state.snacksData].sort(
          (a, b) => a.product_name - b.product_name
        ),
      };

    case "SORT__Name__sort__in__Desc":
      return {
        ...state,
        snacksData: [...state.snacksData].sort(
          (a, b) => b.product_name - a.product_name
        ),
      };

    case "SORT__Weight__in__Asc":
      return {
        ...state,
        snacksData: [...state.snacksData].sort(
          (a, b) => a.product_weight - b.product_weight
        ),
      };
    case "SORT__Weight__sort__in__Desc":
      return {
        ...state,
        snacksData: [...state.snacksData].sort(
          (a, b) => b.product_weight - a.product_weight
        ),
      };
    case "SORT__cal__in__Asc":
      return {
        ...state,
        snacksData: [...state.snacksData].sort(
          (a, b) => a.calories - b.calories
        ),
      };
    case "SORT__cal__sort__in__Desc":
      return {
        ...state,
        snacksData: [...state.snacksData].sort(
          (a, b) => b.calories - a.calories
        ),
      };
    case "SORT__Ing__in__Asc":
      return {
        ...state,
        snacksData: [...state.snacksData].sort(
          (a, b) => a.ingredients - b.ingredients
        ),
      };
    case "SORT__Ing__sort__in__Desc":
      return {
        ...state,
        snacksData: [...state.snacksData].sort(
          (a, b) => b.ingredients - a.ingredients
        ),
      };

    default:
      return state;
  }
};

const Tables = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState(false);
  const [snacksData, dispatch] = useReducer(snackReducer, INTIAL_STATE);

  const handleSortPrice = () => {
    setSort((prev) => !prev);
    if (sort) {
      dispatch({
        type: "SORT__price__in__Asc",
      });
    } else {
      dispatch({
        type: "SORT__price__sort__in__Desc",
      });
    }
  };
  const handleSortId = () => {
    setSort((prev) => !prev);
    if (sort) {
      dispatch({
        type: "SORT__ID__in__Asc",
      });
    } else {
      dispatch({
        type: "SORT__ID__sort__in__Desc",
      });
    }
  };
  const handleSortName = () => {
    setSort((prev) => !prev);
    if (sort) {
      dispatch({
        type: "SORT__Name__in__Asc",
      });
    } else {
      dispatch({
        type: "SORT__Name__sort__in__Desc",
      });
    }
  };
  const handleSortWeight = () => {
    setSort((prev) => !prev);
    if (sort) {
      dispatch({
        type: "SORT__Weight__in__Asc",
      });
    } else {
      dispatch({
        type: "SORT__Weight__sort__in__Desc",
      });
    }
  };
  const handleSortCalories = () => {
    setSort((prev) => !prev);
    if (sort) {
      dispatch({
        type: "SORT__cal__in__Asc",
      });
    } else {
      dispatch({
        type: "SORT__cal__sort__in__Desc",
      });
    }
  };
  const handleSortIngredient = () => {
    setSort((prev) => !prev);
    if (sort) {
      dispatch({
        type: "SORT__Ing__in__Asc",
      });
    } else {
      dispatch({
        type: "SORT__Ing__sort__in__Desc",
      });
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search your Fav Snacks Here 🍟🍟"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th onClick={handleSortId}>ID</th>
            <th onClick={handleSortName}>Product Name</th>
            <th onClick={handleSortWeight}>Product Weight</th>
            <th onClick={handleSortPrice}>Price (inr)</th>
            <th onClick={handleSortCalories}>Calories</th>
            <th onClick={handleSortIngredient}>Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {snacksData?.snacksData
            .filter((eachSnack) =>
              eachSnack.product_name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )
            .map((snack) => (
              <tr key={snack.id}>
                <td>{snack.id}</td>
                <td>{snack.product_name}</td>
                <td>{snack.product_weight}</td>
                <td>{snack.price}</td>
                <td>{snack.calories}</td>
                <td>{snack.ingredients}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
