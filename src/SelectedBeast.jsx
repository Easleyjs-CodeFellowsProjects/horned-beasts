import React from 'react'
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

    render() {
        return (
            <Modal show={this.props.shouldShowModal} onHide={ this.props.hideModal } >
            <Modal.Header closeButton>
              <Modal.Title>{this.props.beast.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={this.props.beast.image_url} alt={this.props.beast.title}></img>
                {this.props.beast.description}
            </Modal.Body>
          </Modal>
        )
    }
}

export default SelectedBeast;