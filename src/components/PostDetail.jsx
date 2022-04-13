import { Button, Card, Container } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";

const PostDetail = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <Container>
      <main>
        <article>
          {post && (
            <Card className="mb-3 shadow">
              <Card.Header className="fw-bold">
                <Card.Title>{post.title}</Card.Title>
                <Button variant="danger" onClick={() => handleDelete(post.id)}>
                  Delete post
                </Button>
              </Card.Header>
              <Card.Body>
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-end">{post.datetime}</Card.Footer>
            </Card>
          )}
          {!post && (
            <div className="text-center my-5">
              <p className="ttext-danger">Post not found</p>
              <NavLink to="/">Go to Home</NavLink>
            </div>
          )}
        </article>
      </main>
    </Container>
  );
};

export default PostDetail;
