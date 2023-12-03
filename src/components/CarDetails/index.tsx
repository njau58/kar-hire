import { useParams } from "react-router";
import Main from "../Layouts/Main";

const CarDetails = () => {
  const { Id } = useParams();

  console.log(Id);
  return (
    <Main>
      <main className="my-56">
        <h1>{`Hello, my id is ${Id}`}</h1>
      </main>
    </Main>
  );
};

export default CarDetails;
