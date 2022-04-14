import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "sunt aut facere repellat",
  },
  {
    id: 2,
    title: "qui est esse",
  },
  {
    id: 3,
    title: "ea molestias quasi sit aut",
  },
  {
    id: 4,
    title: "eum et est occaecati",
  },
  {
    id: 5,
    title: "nesciunt quas odio",
  },
];

function Posts({ history }) {
  return (
    <>
      <p>Posts Page..!</p>
      <button onClick={history.goBack}>Go back</button>
      <button onClick={history.goForward}>Go Forward</button>
      {posts.map((post) => {
        return (
          <p key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </p>
        );
      })}
    </>
  );
}

export default Posts;
