import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const Post = ({
  setPostTitle,
  postTitle,
  setPostBody,
  postBody,
  handleSubmit,
}) => {
  return (
    <Container  className="mt-5 shadow border rounded p-5">
      <h2 className="mb-4">New Post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="postTitle">
          <Form.Label>Post title</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Post Title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="postBody">
          <Form.Label>Post Body</Form.Label>
          <Form.Control
            as="textarea"
            required
            rows={3}
            placeholder="Post Body"
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create new post
        </Button>
      </Form>
    </Container>
  );
};

export default Post;
