import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Feed = ({ posts }) => {
  return (
    <section>
      {posts.map((post) => (
        <NavLink key={post.id} to={`/post/${post.id}`} className="text-black">
          <Card className="mb-3 shadow">
            <Card.Header className="fw-bold">{post.title}</Card.Header>
            <Card.Body>
              <Card.Text>
                {post.body.length <= 100
                  ? post.body
                  : `${post.body.slice(0, 100)}...`}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-end">{post.datetime}</Card.Footer>
          </Card>
        </NavLink>
      ))}
    </section>
  );
};

export default Feed;
