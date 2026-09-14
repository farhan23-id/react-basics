import { useNavigate } from "react-router";
import Card from "../components/Card";

const employees = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    department: "Engineering",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    department: "Product",
  },
  {
    id: 3,
    name: "Alice Johnson",
    position: "UX Designer",
    department: "Design",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Hello, This is the Home Page</h1>
        <div className="card-container">
          {employees.map((employee) => (
            <Card
              key={employee.id}
              id={employee.id}
              name={employee.name}
              position={employee.position}
              department={employee.department}
            />
          ))}
        </div>
      </div>
      <hr />
      <div>
        <h1>Visit other page</h1>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            style={{ padding: "8px" }}
            onClick={() => navigate("/products")}
          >
            Products
          </button>
          <button style={{ padding: "8px" }} onClick={() => navigate("/about")}>
            About
          </button>
          <button
            style={{ padding: "8px" }}
            onClick={() => navigate("/product/kursi-gaming")}
          >
            Products
          </button>
          <button
            style={{ padding: "8px" }}
            onClick={() => navigate("/form")}
          >
            Form Handling
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
