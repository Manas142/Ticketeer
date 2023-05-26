import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import StatusDashboard from '../components/StatusDashboard/StatusDashboard';
import TicketsUpdateModal from '../components/TicketUpdateModal/TicketUpdateModal';
import TicketCreationModal from '../components/TicketCreationModal/TicketCreationModal';
import TicketsTable from '../components/Ticketstable/TicketsTable';
import useFetchTickets from '../hooks/useFetchTicket';
import useTicketUpdate from '../hooks/useTicketUpdate';
import constants from '../utils/constants';
import useCreateTicket from '../hooks/useCreateTicket';
import { useLocation } from 'react-router-dom';


function Customer(){

  const location = useLocation();

  useEffect(()=>{

    const path=location.pathname;

    const isCreateTicketTrue = path.split("/")[2]==="createTicket";
    if(isCreateTicketTrue){
    openCreateTicketModal();
    }


  },[])

      const [ticketDetails, fetchTickets] =  useFetchTickets();
      const {selectedCurrTicket, ticketUpdateModal , editTicket , closeTicketUpdateModal, updateTicketFn, onTicketUpdate} = useTicketUpdate(fetchTickets);
      const {createTicketModal , openCreateTicketModal, closeCreateTicketModal} = useCreateTicket();

    return (
            <div className="row bg-light" >
            <div className="col-1">
            <Sidebar/>
            </div>

            <div className="col my-4">
                <div className='container'>
                   <StatusDashboard ticketDetails={ticketDetails} />
                    <TicketsTable editTicket={editTicket} title={"TICKETS RAISED BY YOU"} ticketDetails={ticketDetails}  />
                    <input className='bg-primary border-white text-white' style={{width:"100%"}} onClick={openCreateTicketModal} type="submit" value="RAISE TICKET"  />
                  <TicketsUpdateModal selectedCurrTicket={selectedCurrTicket} onTicketUpdate={onTicketUpdate} ticketUpdateModal={ticketUpdateModal} closeTicketUpdateModal={closeTicketUpdateModal} updateTicketFn={updateTicketFn} />
                  <TicketCreationModal show={createTicketModal} onClose={closeCreateTicketModal} />
                </div>
            </div>
            <div>
            </div>

             </div>              
    );
}

export default Customer;