import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import React, { Component } from 'react'

export default class ProjectsModal extends Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  onHide = () => this.setState({ modalShow: false });

  render() {
    return (
      <div>
        <Button
          variant="primary"
          onClick={() => this.setState({ modalShow: true })}
        >
          Launch vertically centered modal
        </Button>

        <Modal
          show={this.state.modalShow}
          onHide={this.onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
