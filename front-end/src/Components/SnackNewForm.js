import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackNewForm() {
  let navigate = useNavigate();

  const addSnack = (newSnack) => {
    axios
      .post(`${API}/snacks`, newSnack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [snack, setSnack] = useState({
    name: "",
    image: "",
    protein: "",
    fiber: "",
    added_sugar: "",
  });

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack(snack);
  };
  return (
    <div className="New">
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
        <label htmlFor="url">Image URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={snack.image}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="protein">Protein:</label>
        <input
          id="protein"
          type="text"
          name="protein"
          value={snack.protein}
          onChange={handleTextChange}
        />
         <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          type="text"
          name="fiber"
          value={snack.fiber}
          onChange={handleTextChange}
        />
         <label htmlFor="added_sugar">Added Sugar:</label>
        <input
          id="added_sugar"
          type="text"
          name="added_sugar"
          value={snack.added_sugar}
          onChange={handleTextChange}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SnackNewForm;
