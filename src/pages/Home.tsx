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
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
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
  );
};

export default Home;
