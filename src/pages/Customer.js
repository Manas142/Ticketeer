import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import StatusDashboard from '../components/StatusDashboard/StatusDashboard';
import TicketsUpdateModal from '../components/TicketUpdateModal/TicketUpdateModal';
import TicketCreationModal from '../components/TicketCreationModal/TicketCreationModal';
import TicketsTable from '../components/Ticketstable/TicketsTable';
import useFetchTickets from '../hooks/useFetchTicket';
import useTicketUpdate from '../hooks/useTicketUpdate';
import constants from '../utils/constants';


function Customer(){

      const [ticketDetails, fetchTickets] =  useFetchTickets();
        const {selectedCurrTicket, ticketUpdateModal , editTicket , closeTicketUpdateModal, updateTicketFn, onTicketUpdate} = useTicketUpdate(fetchTickets);


        const [createTicketModal, setCreateTicketModal] = useState(false);

        const closeCreateTicketUpdateModal = ()=>{
          setCreateTicketModal(false);
        }


    return (
            <div className="row bg-light" >
            <div className="col-1">
            <Sidebar/>
            </div>

            <div className="col my-4">
                <div className='container'>
                   <StatusDashboard ticketDetails={ticketDetails} />
                    <TicketsTable editTicket={editTicket} title={"TICKETS RAISED BY YOU"} ticketDetails={ticketDetails}  />
                  

                  <div>
                    <input className='bg-primary border-white text-white' style={{width:"100%"}} onClick={()=>setCreateTicketModal(true)} type="submit" value="RAISE TICKET"  />
                  </div>
                  <TicketsUpdateModal selectedCurrTicket={selectedCurrTicket} onTicketUpdate={onTicketUpdate} ticketUpdateModal={ticketUpdateModal} closeTicketUpdateModal={closeTicketUpdateModal} updateTicketFn={updateTicketFn} />
                   
                   {
                     createTicketModal && <TicketCreationModal onClose={closeCreateTicketUpdateModal} /> 
                   }

                </div>
            </div>
            <div>
            </div>

             </div>              
    );
}

export default Customer;