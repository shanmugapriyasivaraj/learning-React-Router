function Home({ history }) {
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
    </>
  );
}

export default Home;
