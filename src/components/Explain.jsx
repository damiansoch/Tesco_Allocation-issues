import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { MdAutoFixHigh } from "react-icons/md";
import { MdOutlineDoneAll } from "react-icons/md";
import { GoIssueClosed } from "react-icons/go";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        {props.explenation.map((item) => (
          <p key={item}>
            <MdOutlineDoneAll /> {"\u00A0"}
            {"\u00A0"}
            {item}
          </p>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>
          <GoIssueClosed />
          {"\u00A0"}
          {"\u00A0"} Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export function Explain({ explenation, title }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        variant="primary"
        className="col-4 mx-auto my-2"
        onClick={() => setModalShow(true)}
      >
        <MdAutoFixHigh />
        {"\u00A0"}
        {"\u00A0"}
        <i> Solution</i>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        explenation={explenation}
        title={title}
      />
    </>
  );
}

// render(<App />);
