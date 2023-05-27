import Sidebar from '../components/Sidebar';
import StatusDashboard from '../components/statusDashboard/statusDashboard';
import useFetchTickets from '../hooks/useFetchTicket';
import TicketsTable from '../components/ticketstable/ticketsTable';
import useTicketUpdate from '../hooks/useTicketUpdate';
import TicketsUpdateModal from '../components/ticketUpdateModal/ticketUpdateModal';
import constants from '../utils/constants';

function Engineer(){


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
                    <TicketsTable editTicket={editTicket} title={"TICKETS ASSIGNED TO YOU"}ticketDetails={ticketDetails}  />
                  <TicketsUpdateModal selectedCurrTicket={selectedCurrTicket} onTicketUpdate={onTicketUpdate} ticketUpdateModal={ticketUpdateModal} closeTicketUpdateModal={closeTicketUpdateModal} updateTicketFn={updateTicketFn} />
                </div>
            </div>
            <div>
            </div>

             </div>              
    );
}



export default Engineer;