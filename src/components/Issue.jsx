import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Issue = ({ item }) => {
  const { id, title, desctiption } = item;
  return (
    <Card className="my-5">
      <Card.Header as="h5">Issue</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desctiption}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Issue;
