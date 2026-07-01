import { use } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Home = () => {
  const usrDetails = use(AuthContext);
  console.log(usrDetails);
  return (
    <div>
      <h3>This is Home</h3>
    </div>
  );
};

export default Home;
