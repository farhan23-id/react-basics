import { useSearchParams, NavLink } from "react-router";

const Products = () => {
  const [searchParams, setSetSearchParams] = useSearchParams();
  //   const allParams = [];
  //   searchParams.forEach((value, key) => {
  //     allParams.push({ key, value });
  //   });
  //   console.log(allParams);

  const handleSortValueChange = (sortValue: string) => {
    searchParams.set("sort", sortValue);

    setSetSearchParams(searchParams);
  };
  const handleNameValueChange = (nameValue: string) => {
    searchParams.set("name", nameValue);

    setSetSearchParams(searchParams);
  };

  return (
    <div>
      <h1>Ini page Products</h1>
      <div>
        <h2>Generate query params example</h2>
        <NavLink to="http://localhost:5173/products?sort=asc&name=keyboard">
          Generate here
        </NavLink>
      </div>
      <hr />
      <div>
        <h3>Current query (Also see the link)</h3>
        <p>sort: {searchParams.get("sort")} </p>
        <p>name: {searchParams.get("name")} </p>
      </div>
      <hr />
      <div>
        <h3>Try to change the values</h3>
        <div style={{ display: "flex", gap: "4px" }}>
          <p>Change sort value to</p>
          <button onClick={() => handleSortValueChange("popular")}>
            popular
          </button>
          <button onClick={() => handleSortValueChange("desc")}>desc</button>
          <button onClick={() => handleSortValueChange("new")}>new</button>
        </div>
      </div>
      <div>
        <h3>Try to change the values</h3>
        <div style={{ display: "flex", gap: "4px" }}>
          <p>Change name value to</p>
          <button onClick={() => handleNameValueChange("monitor")}>
            monitor
          </button>
          <button onClick={() => handleNameValueChange("pants")}>pants</button>
          <button onClick={() => handleNameValueChange("bed")}>bed</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
