import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Image } from 'react-bootstrap';

class SelectedBeast extends React.Component {

    render() {
        return (
            <Modal show={this.props.shouldShowModal} onHide={ this.props.hideModal } >
            <Modal.Header closeButton>
              <Modal.Title>{this.props.beast.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={this.props.beast.image_url} fluid />
                {this.props.beast.description}
            </Modal.Body>
          </Modal>
        )
    }
}

export default SelectedBeast;