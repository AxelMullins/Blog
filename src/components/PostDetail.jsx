import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import { BsTrash } from "react-icons/bs";

const PostDetail = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <Container className="mt-5">
      <main>
        <article>
          {post && (
            <Card className="mb-3 shadow">
              <Card.Header className="fw-bold d-flex justify-content-between">
                <Card.Title>{post.title}</Card.Title>
                <Button
                  variant="transparent"
                  onClick={() => handleDelete(post.id)}
                >
                  <BsTrash size="1.6em" color="red" />
                </Button>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col xs="12" md="6" lg="4">
                    <Card.Img src={post.img}></Card.Img>
                  </Col>
                  <Col>
                    <Card.Text>{post.body}</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="text-end">{post.datetime}</Card.Footer>
            </Card>
          )}
          {!post && (
            <div className="text-center my-5">
              <p className="ttext-danger">Post not found</p>
              <Button variant="primary">
                <NavLink to="/" className="text-white">
                  Go to Home
                </NavLink>
              </Button>
            </div>
          )}
        </article>
      </main>
    </Container>
  );
};

export default PostDetail;
