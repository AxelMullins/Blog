import React from "react";
import { Container } from "react-bootstrap";
import Feed from "./Feed";

const Home = ({ posts }) => {
  return (
    <Container className="mt-5">
      <main>
        {posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p className="text-center text-danger my-5">No posts</p>
        )}
      </main>
    </Container>
  );
};

export default Home;
