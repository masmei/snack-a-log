import { Link } from "react-router-dom";
import heartRegular from "../assets/heart-regular.png"
import heartSolid from "../assets/heart-solid.png"

function Snack({ snack }) {
  return (
    <div>
      <Link to={`/snacks/${snack.id}`}>
      <span>
        <img src={snack.image} width='150px' height='150px'/>
      </span>
      <br></br>
      <span>
        {snack.is_healthy ? (
          <img src={heartSolid} width="30px" height="30px"/>
        ) : (
          <img src={heartRegular} width="30px" height="30px"/>
        )}
      <h5>{snack.name}</h5>
        </span>
        </Link>
    </div>
  );
}

export default Snack;
