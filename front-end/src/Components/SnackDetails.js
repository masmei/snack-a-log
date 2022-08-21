import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import heartRegular from "../assets/heart-regular.png"
import heartSolid from "../assets/heart-solid.png"

function SnackDetails() {
  const [snack, setSnack] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then((response) => {
      setSnack(response.data.payload);
    });
  }, [id, navigate, API]);
  const deleteSnack = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((c) => console.error("catch", c));
  };
  const handleDelete = () => {
    deleteSnack();
  };
  return (
    <>
      <article>
        <section>
          {snack.is_healthy ? (
            <h4>This snack is healthy</h4>
          ) : (
            <h4>This snack is unhealthy</h4>
          )}
        </section>
        <aside>{snack.is_healthy ? <img src={heartSolid} alt="healthy food"/> : <img src={heartRegular} alt="unhealthy food"/>}</aside>
        <h3>{snack.name}</h3>
        <div>
          <img src={snack.image} width="300px" height="300px" alt={snack.name}/>
        <h5>Protein: {snack.protein}</h5>
        <h5>Fiber: {snack.fiber}</h5>
        <h5>Added Sugar: {snack.added_sugar}</h5>
        </div>
        
        <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/snacks`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/snacks/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    </>
  );
}

export default SnackDetails;
