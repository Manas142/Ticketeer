import { Modal } from "react-bootstrap";


function TicketCreationModal(props){


    return <Modal show={true} onHide={props.onClose}  >

        <Modal.Header closeButton>
            <Modal.Title> Create Ticket  </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form>
                <div>
                    <span>Title </span>
                    <input type="text" name="title" required />
                </div>
            </form>
        </Modal.Body>

    </Modal>


}


export default TicketCreationModal;