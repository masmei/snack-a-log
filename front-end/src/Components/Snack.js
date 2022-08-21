import { Link } from "react-router-dom";
import heartRegular from "../assets/heart-regular.png"
import heartSolid from "../assets/heart-solid.png"

function Snack({ snack }) {
  return (
    <div className="Snack">
      <Link to={`/snacks/${snack.id}`}>
      <span>
        <img src={snack.image} alt={snack.is_healthy ? "healthy food" : "unhealthy food"} width='150px' height='150px' />
      </span>
      <br></br>
      <span>
      <h4 className="name">
        {snack.is_healthy ? (
          <img src={heartSolid} alt="healthy food" width="30px" height="30px"/>
        ) : (
          <img src={heartRegular} alt="unhealthy food" width="30px" height="30px"/>
        )}
        {snack.name}</h4>
        </span>
        </Link>
    </div>
  );
}

export default Snack;
