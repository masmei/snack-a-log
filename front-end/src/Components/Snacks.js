import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";


const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([])

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => setSnacks(response.data.payload))
      .catch((c) => console.warn("catch", c));
  }, []);

  const sortProtein = (event) => {
    event.preventDefault();
    if (event.target.value === "lowest") {
      snacks.sort((a, b) => {
        return a.protein - b.protein;
      });
      setSnacks([...snacks]);
    }
    if (event.target.value === "highest") {
      snacks.sort((a, b) => {
        return b.protein - a.protein;
      });
      setSnacks([...snacks]);
    }
    console.log(snacks);
  };

  const sortFiber = (event) => {
    event.preventDefault();
    if (event.target.value === "lowest") {
      snacks.sort((a, b) => {
        return a.fiber - b.fiber;
      });
      setSnacks([...snacks]);
    }
    if (event.target.value === "highest") {
      snacks.sort((a, b) => {
        return b.fiber - a.fiber;
      });
      setSnacks([...snacks]);
    }
    console.log(snacks);
  };

  const sortAddedSugar = (event) => {
    event.preventDefault();
    if (event.target.value === "lowest") {
      snacks.sort((a, b) => {
        return a.added_sugar - b.added_sugar;
      });
      setSnacks([...snacks]);
    }
    if (event.target.value === "highest") {
      snacks.sort((a, b) => {
        return b.added_sugar - a.added_sugar;
      });
      setSnacks([...snacks]);
    }
    console.log(snacks);
    
  };

  return (
    <div className="Snacks">
      <aside className="sort">
        <section>
        <label className= "protein">Protein:</label>
        <select onChange={sortProtein} name="protein" id="protein">
          <option value="highest">Sort Me</option>
          <option value="highest">Highest</option>
          <option value="lowest">Lowest</option>
        </select>
        </section>
        <section>
        <label className= "fiber">Fiber:</label>
        <select onChange={sortFiber} name="fiber" id="fiber">
         <option value="highest">Sort Me</option>
          <option value="highest">Highest</option>
          <option value="lowest">Lowest</option>
        </select>
        </section>
        <section>
        <label className= "added_sugar">Added Sugar:</label>
        <select onChange={sortAddedSugar} name="added_sugar" id="added_sugar">
          <option>Sort Me</option>
          <option value="highest">Highest</option>
          <option value="lowest">Lowest</option>
        </select>
        </section>
        </aside>
        <section className="item">
            {snacks.map((snack) => {
              return <Snack key={snack.id} snack={snack} />;
            })}
        </section>
      </div>
  );
}

export default Snacks;
