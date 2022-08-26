import Card from "react-bootstrap/Card";
import { Explain } from "./Explain";

const Issue = ({ item }) => {
  const { id, title, desctiption, explenation } = item;

  return (
    <Card className="my-5 bg-light">
      <Card.Header as="h5" className="bg-dark text-white">
        Issue {id}
      </Card.Header>
      <Card.Body>
        <Card.Title className="my-4 ">{title}</Card.Title>
        <Card.Text>{desctiption}</Card.Text>
      </Card.Body>
      <Explain
        explenation={explenation}
        title={title}
        className="text-center"
      />
    </Card>
  );
};

export default Issue;
