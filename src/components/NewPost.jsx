import { Button, Container, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Post = ({
  setPostTitle,
  postTitle,
  setPostBody,
  postBody,
  handleSubmit,
  postCreated,
  setPostCreated,
}) => {
  return (
    <Container className="mt-5 shadow border rounded p-5">
      {!postCreated ? (
        <>
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
        </>
      ) : (
        <section className="d-grid gap-2 col-4 mx-auto text-center my-5">
          <h5>Post created</h5>
          <Button variant="primary">
            <NavLink
              to="/"
              className="text-white"
              onClick={() => setPostCreated(false)}
            >
              Go to Home
            </NavLink>
          </Button>
        </section>
      )}
    </Container>
  );
};

export default Post;
