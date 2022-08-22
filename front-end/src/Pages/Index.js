import Snacks from "../Components/Snacks";
import heartRegular from "../assets/heart-regular.png"
import heartSolid from "../assets/heart-solid.png"

function Index() {
  return (
    <div className="Index">
      <h2>Snack List</h2>
      <h5>Healthy: 
      <img src={heartSolid} height="30px" width="30px"></img>
      </h5>
      <h5>Unhealthy:  
      <img src={heartRegular} height="30px" width="30px"></img>
      </h5>
      <Snacks />
    </div>
  );
}

export default Index;
