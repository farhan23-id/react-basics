import { useLikeToogle } from "../hooks/useLikeToogle";

type EmployeeCardProps = {
  name: string;
  id: number;
  position: string;
  department: string;
};
const Card = (props: EmployeeCardProps) => {
  const { isLiked, handleLikeToogle } = useLikeToogle();

  return (
    <div className="card">
      <h2>Employee Card</h2>
      <p>Name: {props.name}</p>
      <p>ID: {props.id}</p>
      <p>Position: {props.position}</p>
      <p>Department: {props.department}</p>

      <div className="card-buttons">
        <button>Update</button>
        <button onClick={handleLikeToogle}>
          {isLiked ? "❤️ Liked" : "🤍 Like"}
        </button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Card;
