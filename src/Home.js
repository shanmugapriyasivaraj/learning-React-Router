function Home(props) {
  console.log(props);
  return (
    <>
      <p>Home Page..!</p>
      <button onClick={props.history.goBack}>Go Back</button>
      <button onClick={props.history.goForward}>Go Forward</button>
      <button onClick={() => props.history.push("/posts")}>
        Go to Posts Page - Push
      </button>
      <button onClick={() => props.history.replace("/posts")}>
        Go to Posts Page - Replace
      </button>
      <p>{props.location.search}</p>
    </>
  );
}

export default Home;
