import Sidebar from '../components/Sidebar';
import StatusDashboard from '../components/StatusDashboard/StatusDashboard';
import TicketsUpdateModal from '../components/TicketUpdateModal/TicketUpdateModal';
import TicketsTable from '../components/Ticketstable/TicketsTable';
import useFetchTickets from '../hooks/useFetchTicket';
import useTicketUpdate from '../hooks/useTicketUpdate';


function Customer(){

      const [ticketDetails, fetchTickets] =  useFetchTickets();
        const {selectedCurrTicket, ticketUpdateModal , editTicket , closeTicketUpdateModal, updateTicketFn, onTicketUpdate} = useTicketUpdate(fetchTickets);


    return (
            <div className="row bg-light" >
            <div className="col-1">
            <Sidebar/>
            </div>

            <div className="col my-4">
                <div className='container'>
                   <StatusDashboard ticketDetails={ticketDetails} />
                    <TicketsTable editTicket={editTicket} title={"TICKETS RAISED BY YOU"} ticketDetails={ticketDetails}  />
                  <TicketsUpdateModal selectedCurrTicket={selectedCurrTicket} onTicketUpdate={onTicketUpdate} ticketUpdateModal={ticketUpdateModal} closeTicketUpdateModal={closeTicketUpdateModal} updateTicketFn={updateTicketFn} />
                </div>
            </div>
            <div>
            </div>

             </div>              
    );
}

export default Customer;