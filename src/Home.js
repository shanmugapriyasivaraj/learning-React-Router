import { useHistory, useLocation } from "react-router-dom";

function Home() {
  const history = useHistory();
  const location = useLocation();
  return (
    <>
      <p>Home Page..!</p>
      <button onClick={history.goBack}>Go Back</button>
      <button onClick={history.goForward}>Go Forward</button>
      <button onClick={() => history.push("/posts")}>
        Go to Posts Page - Push
      </button>
      <button onClick={() => history.replace("/posts")}>
        Go to Posts Page - Replace
      </button>
      <p>{location.search}</p>
    </>
  );
}

export default Home;
