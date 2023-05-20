import { Button, Modal } from "react-bootstrap";
import fetchDisabledFields from "../../utils/fetchDisabledFieldsData";


function TicketsUpdateModal(props){

    const {ticketUpdateModal, closeTicketUpdateModal, updateTicketFn , selectedCurrTicket , onTicketUpdate} = props;
    
    const disabledFields = fetchDisabledFields();

    return   <Modal show={ticketUpdateModal} onHide={closeTicketUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>

            <form onSubmit={updateTicketFn}>

                <div className="p-1">
                    <h5 className="card-subtitle mb-2 text-primary">
                     TicketId : {selectedCurrTicket._id}
                      </h5>

                    <div className="input-group mb-3">
                        <span className="input-group-text" > Title </span>
                        <input disabled={disabledFields.title} type="text" name="title" value={selectedCurrTicket.title} onChange={onTicketUpdate} />
                    </div>

                     <div className="input-group mb-3">
                        <span className="input-group-text" > Assignee </span>
                        <input  disabled={disabledFields.assignee} type="text" name="assignee" value={selectedCurrTicket.assignee} onChange={onTicketUpdate} />
                    </div>

                       <div className="input-group mb-3">
                        <span className="input-group-text" > Status </span>
                        <input  disabled={disabledFields.status} type="text" name="status" value={selectedCurrTicket.status} onChange={onTicketUpdate} />
                    </div>

                         <div className="input-group mb-3">
                        <textarea   disabled={disabledFields.description} type="text" className="md-textarea form-control"
                         name="description" rows="4" value={selectedCurrTicket.description} onChange={onTicketUpdate} />
                    </div>

                     <div className="input-group mb-3">
                        <span className="input-group-text" > Priority </span>
                        <input  disabled={disabledFields.priority} type="text" name="ticketPriority" value={selectedCurrTicket.ticketPriority} onChange={onTicketUpdate} />
                    </div>

                </div>

                     <Button variant="secondary" onClick={closeTicketUpdateModal}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Update
          </Button>
            </form>

        </Modal.Body>
        <Modal.Footer>
     
        </Modal.Footer>
      </Modal>
    
}

export default TicketsUpdateModal;