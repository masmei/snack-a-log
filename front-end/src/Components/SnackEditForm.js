import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    image: "",
    protein: "",
    fiber: "",
    added_sugar: "",
  });

  const updateSnack = (updatedSnack) => {
    axios
      .put(`${API}/snacks/${id}`, updatedSnack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then(
      (response) => setSnack(response.data.payload),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack(snack, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Snack"
          required
        />
        <label htmlFor="image">Image URL:</label>
        <input
          id="image"
          type="text"
          pattern="http[s]*://.+"
          value={snack.image}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="protein">Protein:</label>
        <input
          id="protein"
          type="number"
          name="protein"
          value={snack.protein}
          onChange={handleTextChange}
        />
         <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          type="number"
          name="fiber"
          value={snack.fiber}
          onChange={handleTextChange}
        />
         <label htmlFor="added_sugar">Added Sugar:</label>
        <input
          id="added_sugar"
          type="number"
          name="added_sugar"
          value={snack.added_sugar}
          onChange={handleTextChange}
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/snacks/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default SnackEditForm;
