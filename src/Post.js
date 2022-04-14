function Post({ match }) {
  return (
    <>
      <p>Post page/..{match.params.id}</p>
    </>
  );
}

export default Post;
