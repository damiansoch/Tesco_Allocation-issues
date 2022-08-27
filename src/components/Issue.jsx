import Card from "react-bootstrap/Card";
import { Explain } from "./Explain";
import { VscError } from "react-icons/vsc";

const Issue = ({ item }) => {
  const { title, desctiption, explenation } = item;

  return (
    <Card className="my-4 bg-light">
      <Card.Header as="h5" className="bg-dark text-white">
        {title}
      </Card.Header>
      <Card.Body>
        <Card.Title className="my-3 ">
          <VscError />
        </Card.Title>
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
